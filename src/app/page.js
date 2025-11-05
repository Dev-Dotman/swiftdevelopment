"use client";
import { useState, useRef } from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneySteps from '@/components/JourneySteps';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutUs from '@/components/AboutUs';
import OurAgents from '@/components/OurAgents';
import PropertyCategories from '@/components/PropertyCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const animationCompleted = useRef(false);

  const handleNavbarAnimationComplete = () => {
    if (animationCompleted.current) return;
    
    animationCompleted.current = true;
    
    // Show hero after navbar animation completes
    setTimeout(() => {
      setShowHero(true);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar onAnimationComplete={handleNavbarAnimationComplete} />
      <Hero showHero={showHero} />
      <AboutUs />
      <FeaturedProperties />
      <JourneySteps />
      {/* <OurAgents /> */}
      {/* <WhyChooseUs /> */}
      <Testimonials />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
}
