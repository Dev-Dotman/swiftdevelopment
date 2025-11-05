"use client";
import { useState, useEffect, useRef } from "react";

export default function AboutUs() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Header */}
        <div
          className={`flex items-center justify-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-6">
            <span className="text-gray-400 font-medium text-sm tracking-wider">
              About Swift Development
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div
          className={`text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-3xl font-normal text-black leading-relaxed mb-8">
            We are committed to{" "}
            <span className="text-gray-500 font-light">delivering an effortless</span>{' '}
            and enjoyable real estate journey for all our clients. Our platform combines a{' '}
            <span className="text-gray-500 font-light">sleek, minimalistic design</span>{' '}
            with cutting-edge functionality, making the property search process{' '}
            <span className="text-gray-500 font-light">seamless and stress-free.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
