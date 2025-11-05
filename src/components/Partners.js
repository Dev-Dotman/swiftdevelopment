"use client";
import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'Bank of Industry', logo: '/partner-boi.png' },
    { name: 'First Bank', logo: '/partner-firstbank.png' },
    { name: 'Access Bank', logo: '/partner-access.png' },
    { name: 'GTBank', logo: '/partner-gtbank.png' },
    { name: 'Zenith Bank', logo: '/partner-zenith.png' },
    { name: 'UBA', logo: '/partner-uba.png' }
  ];

  const certifications = [
    { name: 'NIESV Certified', icon: '🏆' },
    { name: 'ISO 9001:2015', icon: '✓' },
    { name: 'Real Estate Council', icon: '⭐' },
    { name: 'Property Awards 2023', icon: '🥇' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Trusted By</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            Our <span className="text-yellow-400">Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Collaborating with leading financial institutions and industry leaders
          </p>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-zinc-50 hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="relative h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Awards & <span className="text-yellow-400">Certifications</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-gradient-to-br from-zinc-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-black group-hover:text-yellow-400 transition-colors">
                  {cert.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
