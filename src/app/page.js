"use client";
import { useState } from 'react';
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
import DevelopmentTeam from '@/components/DevelopmentTeam';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  const handleAnimationComplete = () => {
    setShowHero(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar onAnimationComplete={handleAnimationComplete} skipAnimation={false} />
      
      <Hero showHero={showHero} />
      <AboutUs />
      <FeaturedProperties />
      <JourneySteps />
      <DevelopmentTeam />
      <Footer />
    </main>
  );
}
