"use client";
import { useState, useEffect, useRef } from 'react';

export default function LoadingAnimation({ onAnimationComplete }) {
  const [animationStage, setAnimationStage] = useState('initial'); // initial, appear, moving, expanding, complete
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const timeouts = [];

    // Stage 1: Show circle after brief delay
    timeouts.push(setTimeout(() => {
      setAnimationStage('appear');
    }, 500));

    // Stage 2: Start moving upward
    timeouts.push(setTimeout(() => {
      setAnimationStage('moving');
    }, 1500));

    // Stage 3: Start expanding into navbar shape
    timeouts.push(setTimeout(() => {
      setAnimationStage('expanding');
    }, 3000));

    // Stage 4: Complete animation and notify parent
    timeouts.push(setTimeout(() => {
      setAnimationStage('complete');
      onAnimationComplete();
    }, 4200));

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [onAnimationComplete]);

  if (animationStage === 'complete') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div 
        className={`bg-white rounded-full flex items-center justify-center transition-all duration-1200 ease-in-out ${
          animationStage === 'initial' ? 'w-16 h-16 scale-0 opacity-0' : 
          animationStage === 'appear' ? 'w-16 h-16 scale-100 opacity-100' :
          animationStage === 'moving' ? 'w-16 h-16 scale-100 opacity-100 -translate-y-[45vh]' :
          animationStage === 'expanding' ? 'w-screen h-16 scale-100 opacity-90 -translate-y-[45vh] rounded-none' : ''
        }`}
        style={{
          transformOrigin: 'center center'
        }}
      >
        <span className={`text-black font-bold transition-all duration-800 ${
          animationStage === 'expanding' ? 'text-lg opacity-0' : 'text-lg opacity-100'
        }`}>
          SD
        </span>
        
        {/* Navbar content that fades in during expansion */}
        <div className={`absolute inset-0 flex items-center justify-between px-8 transition-all duration-800 ${
          animationStage === 'expanding' ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SD</span>
            </div>
            <span className="text-xl font-bold text-black">
              Swift Development
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-black text-sm font-medium">Home</span>
            <span className="text-black text-sm font-medium">Services</span>
            <span className="text-black text-sm font-medium">Projects</span>
            <span className="text-black text-sm font-medium">About</span>
            <span className="text-black text-sm font-medium">Contact</span>
          </div>
          
          <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            Get Quote
          </div>
        </div>
      </div>
    </div>
  );
}
