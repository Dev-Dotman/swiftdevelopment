"use client";
import Image from 'next/image';

export default function PropertyCategories() {
  const categories = [
    {
      title: 'Apartments for Rent',
      count: '120+ Properties',
      image: '/category-apartment.jpg',
      icon: '🏢'
    },
    {
      title: 'Luxury Homes',
      count: '85+ Properties',
      image: '/category-luxury.jpg',
      icon: '🏰'
    },
    {
      title: 'Commercial Spaces',
      count: '50+ Properties',
      image: '/category-commercial.jpg',
      icon: '🏬'
    },
    {
      title: 'New Developments',
      count: '30+ Projects',
      image: '/category-new.jpg',
      icon: '🏗️'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Browse by Type</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            Property <span className="text-yellow-400">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find the perfect property type that matches your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{category.count}</p>
                <div className="flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
