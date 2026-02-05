import React from 'react';

const ContactIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto h-[300px] sm:h-[350px] md:h-[400px]">
    {/* Background circles */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 sm:w-24 sm:h-24 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-40"></div>
    </div>
    
    {/* Main phone */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-[#4A90E2] rounded-[2.5rem] sm:rounded-[3rem] w-[160px] sm:w-[200px] md:w-[240px] h-[260px] sm:h-[320px] md:h-[380px] shadow-2xl p-3 sm:p-4 relative">
        {/* Phone notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-[#3A7BC8] w-20 sm:w-24 h-4 sm:h-5 rounded-full"></div>
        
        {/* Phone screen */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2rem] sm:rounded-[2.5rem] w-full h-full mt-3 sm:mt-4 flex items-center justify-center relative overflow-hidden">
          {/* Browser dots */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Shield icon */}
          <div className="text-6xl sm:text-7xl md:text-8xl">✓</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 sm:w-28 md:w-32 h-28 sm:h-32 md:h-36 bg-gradient-to-br from-green-400 to-emerald-500 rounded-[2rem] flex items-center justify-center shadow-lg">
              <div className="text-white text-5xl sm:text-6xl md:text-7xl font-bold">✓</div>
            </div>
          </div>
          
          {/* Bottom line */}
          <div className="absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Home button */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full shadow-md"></div>
      </div>
    </div>
    
    {/* Floating icons */}
    <div className="absolute top-8 sm:top-12 left-4 sm:left-8 bg-yellow-400 p-2 sm:p-3 rounded-lg shadow-lg animate-float">
      <div className="text-2xl sm:text-3xl">⚙️</div>
    </div>
    
    <div className="absolute top-12 sm:top-16 right-6 sm:right-10 bg-green-400 p-2 sm:p-3 rounded-xl shadow-lg animate-float-delayed">
      <div className="text-xl sm:text-2xl">📶</div>
    </div>
    
    <div className="absolute top-28 sm:top-32 left-2 sm:left-4 bg-blue-500 p-2 sm:p-3 rounded-lg shadow-lg animate-pulse">
      <div className="text-xl sm:text-2xl">🔑</div>
    </div>
    
    {/* People sitting */}
    <div className="absolute bottom-0 left-6 sm:left-10 transform translate-y-4">
      <div className="text-5xl sm:text-6xl">🧑</div>
    </div>
    
    <div className="absolute bottom-0 right-6 sm:right-10 transform translate-y-4">
      <div className="text-5xl sm:text-6xl">👩</div>
    </div>
    
    <div className="absolute bottom-4 right-20 sm:right-24 bg-gray-100 p-2 rounded-lg shadow-md">
      <div className="text-xl sm:text-2xl">💬</div>
    </div>
  </div>
);

export const ContactHero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-8 sm:py-12">
      {/* Left side - Illustration */}
      <div className="order-last md:order-first">
        <ContactIllustration />
      </div>
      
      {/* Right side - Content */}
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Got any questions?
            <br />
            Don't hesitate to get in touch.
          </h1>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Address</p>
              <p className="text-gray-600 text-sm sm:text-base">Moonshine St. 14/05 Light City, London</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Phone</p>
              <a href="tel:00123456789" className="text-gray-600 hover:text-blue-600 text-sm sm:text-base transition-colors">
                00 (123) 456 78 90
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm sm:text-base mb-1">E-mail</p>
              <a href="mailto:sandbox@email.com" className="text-gray-600 hover:text-blue-600 text-sm sm:text-base transition-colors">
                sandbox@email.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
