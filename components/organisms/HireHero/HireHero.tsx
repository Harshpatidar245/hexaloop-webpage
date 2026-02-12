import React from 'react';

const HireIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto h-[300px] sm:h-[350px] md:h-[400px]">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 sm:w-24 sm:h-24 bg-indigo-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-200 rounded-full opacity-40"></div>
    </div>
    
    {/* Laptop */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-800 rounded-t-2xl w-[280px] sm:w-[320px] md:w-[360px] h-[180px] sm:h-[200px] md:h-[220px] p-3 sm:p-4 relative">
        {/* Screen */}
        <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg w-full h-full flex items-center justify-center relative overflow-hidden">
          {/* Code lines */}
          <div className="absolute inset-0 p-4 text-left text-white font-mono text-xs opacity-70">
            <div>const developer = &#123;</div>
            <div className="ml-4">skills: ['React', 'Node.js'],</div>
            <div className="ml-4">experience: '5+ years',</div>
            <div className="ml-4">available: true</div>
            <div>&#125;;</div>
          </div>
          
          {/* Hire badge */}
          <div className="relative z-10 bg-white rounded-xl px-6 py-3 shadow-lg">
            <div className="text-2xl font-bold text-indigo-600">HIRE</div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="bg-gray-700 h-2 w-[300px] sm:w-[340px] md:w-[380px] rounded-b-xl mx-auto -mt-1"></div>
      <div className="bg-gray-600 h-1 w-[200px] sm:w-[240px] md:w-[280px] mx-auto"></div>
    </div>
    
    {/* Floating tech icons */}
    <div className="absolute top-8 sm:top-12 left-4 sm:left-8 bg-blue-500 p-2 sm:p-3 rounded-lg shadow-lg animate-float">
      <div className="text-xl sm:text-2xl">⚛️</div>
    </div>
    
    <div className="absolute top-12 sm:top-16 right-6 sm:right-10 bg-green-500 p-2 sm:p-3 rounded-xl shadow-lg animate-float-delayed">
      <div className="text-xl sm:text-2xl">📱</div>
    </div>
    
    <div className="absolute bottom-16 sm:bottom-20 left-2 sm:left-4 bg-yellow-400 p-2 sm:p-3 rounded-lg shadow-lg animate-pulse">
      <div className="text-xl sm:text-2xl">💻</div>
    </div>
    
    <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 bg-purple-500 p-2 sm:p-3 rounded-lg shadow-lg animate-float">
      <div className="text-xl sm:text-2xl">🚀</div>
    </div>
  </div>
);

export const HireHero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-8 sm:py-12">
      {/* Left side - Illustration */}
      <div className="order-last md:order-first">
        <HireIllustration />
      </div>
      
      {/* Right side - Content */}
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Hire Expert Developers
            <br />
            <span className="text-indigo-600">For Your Next Project</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Looking for skilled developers to bring your ideas to life? We're here to help you build amazing digital experiences.
          </p>
        </div>
        
        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">5+ Years Experience</p>
              <p className="text-sm text-gray-600">Proven track record in delivering quality projects</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Modern Technologies</p>
              <p className="text-sm text-gray-600">React, Next.js, Node.js, and more</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Flexible Engagement</p>
              <p className="text-sm text-gray-600">Hire for a project or long-term collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
