"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function JourneySteps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Our Agents', href: '#agents' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Discover House',
      active: true
    },
    {
      number: '2',
      title: 'Schedule to visit',
      active: false
    },
    {
      number: '3',
      title: 'Hassle free purchase',
      active: false
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-normal text-black leading-relaxed">
            Peace of mind at every step<br />of your journey home
          </h2>
        </div>

        {/* Steps Progress */}
        <div className={`flex justify-center items-center mb-16 gap-4 flex-wrap transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {steps.map((step, index) => (
            <div key={index} className="flex items-center" style={{ transitionDelay: `${300 + index * 100}ms` }}>
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-medium transition-all duration-300 ${
                  step.active 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.number}
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-24 h-0.5 bg-gray-200 mx-2 mt-[-2rem]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className={`relative bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 rounded-3xl overflow-hidden h-[400px] shadow-xl transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Modern architecture"
              fill
              className="object-cover opacity-90"
              unoptimized
            />
          </div>

          {/* Trusted Badge */}
          <div className="absolute top-6 right-6">
            <div className="bg-gray-700/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              100% Trusted
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Content Card */}
          <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-[450px]">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-black mb-4">
                We are committed to delivering enjoyable real estate journey
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover a range of exceptional homes and investment opportunities designed to meet your lifestyle and investment goals.
              </p>
              <button className="bg-black hover:bg-yellow-400 text-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={(e) => handleSmoothScroll(e, '#properties')}>
                Explore All Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
