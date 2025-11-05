"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';

export default function Hero({ showHero }) {
  const [contentStage, setContentStage] = useState('hidden'); // hidden, heading, description, search, complete
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [location, setLocation] = useState('');

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

  const propertyTypes = ['Residential', 'Commercial', 'Land', 'Industrial'];
  const priceRanges = ['$0 - $500k', '$500k - $1M', '$1M - $2M', '$2M+'];
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Houston'];

  const handleSearch = () => {
    console.log({ propertyType, priceRange, location });
    // Add search logic here
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
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-700 ${
              contentStage === 'hidden' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}>
              Own Your <span className="bg-yellow-400/80 text-black px-3 rounded-lg">WORLD</span> , ONE PROPERTY AT A TIME
            </h1>

            {/* Search Box */}
            <div className={`bg-black/60 backdrop-blur-md rounded-2xl p-6 transition-all duration-700 delay-300 ${
              contentStage === 'hidden' || contentStage === 'heading' || contentStage === 'description' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <CustomDropdown
                  label="Property Type"
                  options={propertyTypes}
                  value={propertyType}
                  onChange={setPropertyType}
                  placeholder="Select"
                />

                <CustomDropdown
                  label="Price Range"
                  options={priceRanges}
                  value={priceRange}
                  onChange={setPriceRange}
                  placeholder="Select"
                />

                <CustomDropdown
                  label="Location"
                  options={locations}
                  value={location}
                  onChange={setLocation}
                  placeholder="Select"
                />
              </div>

              <button 
                onClick={handleSearch}
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEARCH
              </button>
            </div>
          </div>

          {/* Right Side - Description with Progress Bar */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${
            contentStage === 'hidden' || contentStage === 'heading' ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
          }`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-white text-lg leading-relaxed mb-6">
                Take Control Of Your Future, One Property At A Time. Build Your Dreams, Secure Investments, And Shape Your World With Ease And Confidence.
              </p>
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 w-1/4 rounded-full"></div>
                </div>
                
                <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
