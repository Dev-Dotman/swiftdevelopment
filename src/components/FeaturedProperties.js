"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('All Type');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      title: 'Rosewood Manor',
      price: '$2,400',
      priceType: '/month',
      location: '6391 Elgin St. Celina, Delaware 10299',
      bedrooms: 4,
      bathrooms: 2,
      area: '8x8',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Seabreeze Villa',
      price: '$1,500',
      priceType: '/month',
      location: '3517 W. Gray St. Utica, Pennsylvania 57867',
      bedrooms: 2,
      bathrooms: 1,
      area: '5x7.5',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Willow Cottage',
      price: '$1,600',
      priceType: '/month',
      location: '2715 Ash South Dakota 83475',
      bedrooms: 3,
      bathrooms: 1,
      area: '5x7',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Rosewood Manor',
      price: '$2,400',
      priceType: '/month',
      location: '6391 Elgin St. Celina, Delaware 10299',
      bedrooms: 3,
      bathrooms: 2,
      area: '8x8',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Seabreeze Villa',
      price: '$1,500',
      priceType: '/month',
      location: '3517 W. Gray St. Utica, Pennsylvania 57867',
      bedrooms: 2,
      bathrooms: 1,
      area: '5x7.5',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      title: 'Willow Cottage',
      price: '$1,600',
      priceType: '/month',
      location: '2715 Ash South Dakota 83475',
      bedrooms: 3,
      bathrooms: 1,
      area: '5x7',
    }
  ];

  const filters = ['All Type', 'Industrial House', 'Apartment', 'Villa', 'Duplex', 'Warehouse', 'Resort'];

  return (
    <section ref={sectionRef} id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl font-light text-black mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore our latest property
          </h2>

          {/* Filter Tabs with Arrows */}
          <div className={`flex items-center gap-3 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="w-10 h-10 rounded-full border border-gray-300 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 hover:bg-yellow-400 hover:text-black flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-3 overflow-x-auto scrollbar-hide flex-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full font-normal whitespace-nowrap transition-all duration-300 text-sm ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-yellow-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <button className="w-10 h-10 rounded-full border border-gray-300 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 hover:bg-yellow-400 hover:text-black flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Properties Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl font-semibold text-black">{property.price}</span>
                  <span className="text-gray-500 text-sm">{property.priceType}</span>
                  <button className="float-right w-10 h-10 rounded-full border border-gray-200 hover:bg-yellow-400 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 group">
                    <span className="text-gray-600 group-hover:text-black">→</span>
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-2">
                  {property.title}
                </h3>

                {/* Location */}
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                  {property.location}
                </p>

                {/* Features */}
                <div className="flex items-center gap-6 text-gray-600 text-sm pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    {property.bathrooms} Bathrooms
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.area} m²
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
