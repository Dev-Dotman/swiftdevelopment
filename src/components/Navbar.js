"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navbar({ onAnimationComplete = () => {}, skipAnimation = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animationStage, setAnimationStage] = useState(skipAnimation ? 'complete' : 'initial');
  const hasStarted = useRef(false);

  useEffect(() => {
    // Reset hasStarted when skipAnimation changes
    if (!skipAnimation) {
      hasStarted.current = false;
    }
  }, [skipAnimation]);

  useEffect(() => {
    if (skipAnimation) {
      onAnimationComplete();
      return;
    }

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
      if (onAnimationComplete && typeof onAnimationComplete === 'function') {
        onAnimationComplete();
      }
    }, 4500));

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [onAnimationComplete, skipAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Account for fixed navbar
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Black background overlay - only show if not skipping animation */}
      {!skipAnimation && (
        <div className={`fixed inset-0 z-[99] bg-transparent transition-opacity duration-500 ${
          animationStage === 'initial' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} />
      )}

      {/* Navbar that animates and stays */}
      <div className={`fixed z-[100] top-0 left-0 right-0 flex justify-center ${
        animationStage === 'complete' ? 'transition-all duration-500' : 'transition-none'
      }`}>
        <nav 
          className={`bg-white flex items-center justify-center transition-all ease-in-out ${
            animationStage === 'initial' ? 'w-16 h-16 scale-0 opacity-0 rounded-full duration-0 mt-[calc(50vh-2rem)]' : 
            animationStage === 'appear' ? 'w-16 h-16 scale-100 opacity-100 rounded-full duration-500 mt-[calc(50vh-2rem)]' :
            animationStage === 'moving' ? 'w-16 h-16 scale-100 opacity-100 rounded-full duration-1500 mt-[0.625rem]' :
            animationStage === 'expanding' ? 'w-[95vw] max-w-7xl h-16 scale-100 opacity-100 rounded-2xl duration-1000 mt-[0.625rem]' :
            animationStage === 'complete' ? `w-[95vw] max-w-7xl h-16 opacity-100 rounded-2xl duration-500 mt-[0.625rem] ${
              isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm'
            }` : ''
          }`}
          style={{
            transformOrigin: 'center center'
          }}
        >
          <span className={`text-black font-bold transition-all duration-800 ${
            animationStage === 'expanding' || animationStage === 'complete' ? 'text-lg opacity-0' : 'text-lg opacity-100'
          }`}>
            SD
          </span>
          
          {/* Navbar content that fades in during expansion and stays */}
          <div className={`absolute inset-0 flex items-center justify-between px-8 transition-all duration-800 ${
            animationStage === 'expanding' || animationStage === 'complete' ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">SD</span>
              </div>
              <span className="text-xl font-bold text-black">
                Swift Development
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-black hover:text-yellow-400 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-yellow-400 p-2 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {animationStage === 'complete' && (
            <div className={`absolute top-full left-0 right-0 mt-2 md:hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-lg`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-black hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black block px-3 py-2 text-base font-medium rounded-md mx-3 mt-4 text-center transition-colors duration-300 cursor-pointer"
                >
                  Get Quote
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

