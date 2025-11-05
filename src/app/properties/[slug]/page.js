"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import propertiesData from '@/data/properties.json';

export default function PropertyDetails() {
  const params = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProperty = propertiesData.find(p => p.slug === params.slug);
    
    if (foundProperty) {
      setProperty(foundProperty);
      setMessage(`Hi Carolina, I would like to know more about this listing.`);
    }
    setIsLoading(false);
  }, [params.slug]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar skipAnimation={true} />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black">Property not found</h2>
            <Link href="/#properties" className="text-yellow-500 hover:text-yellow-600 underline">
              Back to Properties
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar skipAnimation={true} />
      
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 py-8 pt-24">
        {/* Breadcrumb - Above everything */}
        <div className="mb-6">
          <Link href="/#properties" className="text-gray-600 hover:text-yellow-500 flex items-center gap-2 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
        </div>

        <div className="mx-auto max-w-[1200px]">
          {/* Left Column - Images and Details */}
          <div>
            {/* Image Gallery Section - Side by Side Layout */}
            <div className="mb-6 grid grid-cols-3 gap-3 h-[500px]">
              {/* Main Large Image - Takes 2 columns */}
              <div className="col-span-2 relative rounded-xl overflow-hidden group bg-gray-100">
                <Image
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                
                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}


                {/* Photo Counter - Bottom Right */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {currentImageIndex + 1}/{property.images.length}
                </div>
              </div>

              {/* Right Side - 2 Thumbnail Images Stacked */}
              {property.images.length > 1 && (
                <div className="col-span-1 flex flex-col gap-3">
                  {property.images.slice(1, 3).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index + 1)}
                      className={`relative flex-1 rounded-xl overflow-hidden transition-all hover:opacity-80 ${
                        currentImageIndex === index + 1 ? ' ' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`View ${index + 2}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {/* Show "X photos" overlay on last thumbnail if more images exist */}
                      {/* {index === 1 && property.images.length > 3 && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                          <svg className="w-6 h-6 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white font-semibold text-sm">{property.images.length} photos</span>
                        </div>
                      )} */}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price and Stats Bar */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-black mb-2">{property.price}</h1>
                <p className="text-gray-600 text-base">{property.location}</p>
              </div>

              <div className="grid grid-cols-4 gap-6 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-black mb-1">{property.bedrooms}</div>
                  <div className="text-gray-600 text-sm">Beds</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-1">{property.bathrooms}</div>
                  <div className="text-gray-600 text-sm">Baths</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-1">{property.area}</div>
                  <div className="text-gray-600 text-sm">Sqft</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">$359/sqft</div>
                  <div className="text-sm text-gray-600">$10/mo HOA</div>
                </div>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Type</div>
                    <div className="font-medium text-black text-sm">Single Family Residence</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Built</div>
                    <div className="font-medium text-black text-sm">Built in 2024</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Lot Size</div>
                    <div className="font-medium text-black text-sm">0.44 Acres Lot</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Price/Sqft</div>
                    <div className="font-medium text-black text-sm">$83/sqft</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Homiq Value</div>
                    <div className="font-medium text-black text-sm">$316,500 Homiq®</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">HOA Fee</div>
                    <div className="font-medium text-black text-sm">10/mo HOA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About This Home */}
            <div>
              <h2 className="text-xl font-bold text-black mb-3">About This Home</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {property.description || "Welcome to this beautifully upgraded single-story home in the heart of Sun City Summerlin! This 2-bedroom, 2-bathroom gem features an open floor plan that's perfect for entertaining. The spacious kitchen boasts an oversized island, stainless steel appliances, and plenty of cabinet space—ideal for any home chef. Enjoy cozy evenings by the fireplace in the inviting family room. You'll love the upgraded flooring throughout, as well as the modern finishes in both bathrooms. The large backyard is a private oasis with stylish pavers and room to relax or entertain. Plus, a 2-car garage adds convenience and extra storage. All located in the vibrant 55+ community of Sun City Summerlin, with access to amazing amenities and activities. Don't miss out—schedule your private showing today!"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
