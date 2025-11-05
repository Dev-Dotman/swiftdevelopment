"use client";
import Image from 'next/image';

export default function OurAgents() {
  const agents = [
    {
      name: 'Jacob Anderson',
      role: 'Agents',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Kristin Watson',
      role: 'Agents',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Robert Fox',
      role: 'Agents',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  const featuredAgent = {
    name: 'Dianne Russell',
    role: 'Support Agent',
    email: 'supportagent@community.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    badge: 'Our Agent',
    title: 'Tailored Property Solutions for Business Growth',
    description: 'Real estate agents curate properties that align with the business\'s expansion goals.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  };

  return (
    <section id="agents" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mb-8">
          <button className="w-10 h-10 rounded-full border border-gray-300 hover:border-yellow-400 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 hover:border-yellow-400 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Featured Agent Card */}
          <div className="relative bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl overflow-hidden h-[600px]">
            {/* Background Image */}
            <Image
              src={featuredAgent.image}
              alt={featuredAgent.name}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-gray-700/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs">❄️</span>
                </div>
                {featuredAgent.badge}
              </div>
            </div>

            {/* Content Card at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                {featuredAgent.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {featuredAgent.description}
              </p>

              {/* Contact Button and Info */}
              <div className="flex items-center justify-between">
                <button className="bg-black hover:bg-yellow-400 text-white hover:text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2">
                  Contact with me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>

              {/* Agent Info */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 mb-1">{featuredAgent.email}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-black">{featuredAgent.name}</div>
                    <div className="text-sm text-gray-600">Follow me</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={featuredAgent.social.instagram} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-xs">📷</span>
                    </a>
                    <a href={featuredAgent.social.twitter} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-xs">𝕏</span>
                    </a>
                    <a href={featuredAgent.social.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-xs">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Heading and Agent Cards */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
              Contact with our top agents
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our expert real estate agents are here to guide you every step of the way!
            </p>

            {/* Agent Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {/* Agent Photo */}
                  <div className="relative h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-black mb-1">{agent.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{agent.role}</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                      <a href={agent.social.instagram} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                        <span className="text-xs">📷</span>
                      </a>
                      <a href={agent.social.twitter} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                        <span className="text-xs">𝕏</span>
                      </a>
                      <a href={agent.social.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300">
                        <span className="text-xs">in</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
