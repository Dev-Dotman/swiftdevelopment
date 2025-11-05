"use client";
import Image from 'next/image';

export default function BlogHighlights() {
  const articles = [
    {
      title: '10 Tips for First-Time Home Buyers in Lagos',
      excerpt: 'Essential advice for navigating the real estate market and making smart investment decisions...',
      image: '/blog1.jpg',
      date: 'Dec 15, 2023',
      category: 'Buying Guide',
      readTime: '5 min read',
      author: 'Sarah Johnson'
    },
    {
      title: 'The Rise of Smart Homes in Nigeria',
      excerpt: 'How technology is transforming residential properties and increasing property values...',
      image: '/blog2.jpg',
      date: 'Dec 10, 2023',
      category: 'Market Trends',
      readTime: '7 min read',
      author: 'Michael Obi'
    },
    {
      title: 'Investment Opportunities in Commercial Real Estate',
      excerpt: 'Exploring lucrative commercial property investments and what to look for...',
      image: '/blog3.jpg',
      date: 'Dec 5, 2023',
      category: 'Investment',
      readTime: '6 min read',
      author: 'David Chen'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            Market <span className="text-yellow-400">Insights</span> & News
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with expert advice and the latest real estate trends
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Article Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">By {article.author}</span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-yellow-400 hover:text-yellow-500 font-semibold text-sm transition-colors group"
                  >
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#all-articles"
            className="inline-flex items-center gap-2 border-2 border-black hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
