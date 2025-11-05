"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function DevelopmentTeam() {
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

  const teamMembers = [
    {
      id: '01',
      name: 'Bright Onipayede',
      role: 'Lead Developer & Founder',
      image: '/devteam1.jpeg',
      bio: 'With years of experience in property development, Bright leads our team with vision and expertise in creating exceptional living spaces.',
      featured: true
    },
    {
      id: '02',
      name: 'Eunice Buabeng-Munkoh',
      role: 'Co-Founder & CMO',
      image: '/devteam2.jpeg',
      bio: 'Eunice ensures every project is delivered on time and exceeds quality standards with her meticulous attention to detail.',
      featured: false
    },
    {
      id: '03',
      name: 'Terry Kweku Boateng ',
      role: 'Project Manager',
      image: '/devteam3.jpeg',
      bio: 'Terry brings innovative design concepts to life, blending modern aesthetics with functional living spaces.',
      featured: false
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation */}
        <div className={`flex items-start justify-between mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light text-black max-w-xl leading-tight">
            Meet our development team
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-yellow-400 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 hover:border-yellow-400 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-xl ${
                index === 0 ? 'bg-gray-100' : 'bg-white border border-gray-100'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Featured Card - Full Image with Overlay */}
              {index === 0 ? (
                <div className="relative h-[500px]">
                  {/* Background Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon - Top Left */}
                  {/* <div className="absolute top-8 left-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div> */}

                  {/* Content - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {/* Bio Text */}
                    <p className="text-white text-lg mb-6 leading-relaxed">
                      " {member.bio} "
                    </p>

                    {/* Member Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">
                          {member.name}
                        </h4>
                        <p className="text-white/80 text-sm">
                          {member.role}
                        </p>
                      </div>
                      <div className="text-white/40 text-6xl font-light">
                        {member.id}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Cards - Small Profile Picture */
                <div className="p-8 h-[500px] flex flex-col">
                  {/* Profile Picture */}
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Bio Text */}
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed flex-grow">
                    " {member.bio} "
                  </p>

                  {/* Bottom Content */}
                  <div className="mt-auto">
                    {/* Member Info */}
                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-black font-semibold text-lg mb-1">
                          {member.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {member.role}
                        </p>
                      </div>
                      <div className="text-gray-200 text-6xl font-light leading-none">
                        {member.id}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
