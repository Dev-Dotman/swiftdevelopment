"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';

export default function Hero({ showHero }) {
  const [contentStage, setContentStage] = useState('hidden');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "Take Control Of Your Future, One Property At A Time. Build Your Dreams, Secure Investments, And Shape Your World With Ease And Confidence.",
    "The kind of peace you live in, becomes the level of life you operate from.",
    "When your environment is calm, decisions become clearer… and wealth multiplies faster.",
    "Don't just buy property… buy the atmosphere that elevates your mind and income."
  ];

  useEffect(() => {
    if (!showHero) return;

    const timeouts = [];

    // Stage 1: Show heading
    timeouts.push(setTimeout(() => {
      setContentStage('heading');
    }, 100));

    // Stage 2: Show description
    timeouts.push(setTimeout(() => {
      setContentStage('description');
    }, 400));

    // Stage 3: Show search
    timeouts.push(setTimeout(() => {
      setContentStage('search');
    }, 700));

    // Stage 4: Complete
    timeouts.push(setTimeout(() => {
      setContentStage('complete');
    }, 1000));

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [showHero]);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const propertyTypes = ['Residential', 'Commercial', 'Land', 'Industrial'];
  const priceRanges = ['$0 - $500k', '$500k - $1M', '$1M - $2M', '$2M+'];
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Houston'];

  const handleSearch = () => {
    console.log({ propertyType, priceRange, location });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/swiftdevimg3.jpg"
          alt="Construction site background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Main Content */}
          <div>
            {/* Main Heading */}
            <h1 className={`text-5xl md:text-3xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 ${
              contentStage === 'hidden' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}>
              Own Your <span className="bg-yellow-400/80 text-black px-1 rounded-lg">WORLD,</span><br />
              ONE PROPERTY<br />
              <span className="text-white-400">AT A TIME.</span>
            </h1>
          </div>

          {/* Right Side - Carousel with Progress Bar */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${
            contentStage === 'hidden' || contentStage === 'heading' ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
          }`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Carousel Content */}
              <div className="relative h-32 mb-6">
                {slides.map((slide, index) => (
                  <p
                    key={index}
                    className={`absolute inset-0 text-white text-lg leading-relaxed transition-all duration-500 ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {slide}
                  </p>
                ))}
              </div>
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrevSlide}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                    style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
                  ></div>
                </div>
                
                <button 
                  onClick={handleNextSlide}
                  className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'bg-yellow-400' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
