import React from 'react';
import { FeatureItem } from '@/components/molecules/FeatureItem';

const HowItWorksIllustration = () => (
  <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto h-[350px] sm:h-[400px] md:h-[450px]">
    {/* Decorative background circles */}
    <div className="absolute top-8 left-4 w-3 h-3 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute top-20 right-8 w-4 h-4 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute bottom-32 left-8 w-3 h-3 border-2 border-gray-300 rounded-full"></div>
    <div className="absolute top-12 right-16 w-2 h-2 bg-gray-300 rounded-sm"></div>
    
    {/* Main browser window */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFE5E0] rounded-2xl w-72 sm:w-80 md:w-96 h-80 sm:h-96 shadow-2xl p-4 sm:p-6">
      {/* Browser top bar */}
      <div className="bg-white rounded-xl p-3 mb-4 shadow-md">
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        {/* Blue content box */}
        <div className="bg-blue-500 h-8 rounded"></div>
      </div>
      
      {/* Search/Input bar */}
      <div className="bg-white/60 backdrop-blur-sm border-2 border-white rounded-full h-10 mb-4"></div>
      
      {/* Gear icon - top right */}
      <div className="absolute -top-8 right-8 bg-[#00D4AA] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl transform rotate-12 animate-float">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"/>
        </svg>
      </div>
      
      {/* Code/Terminal window - top right with blue badge */}
      <div className="absolute top-12 right-4 bg-[#00D4AA] w-28 h-32 rounded-lg shadow-xl p-2">
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 bg-white/80 rounded w-3/4"></div>
          <div className="h-1.5 bg-white/80 rounded w-1/2"></div>
          <div className="h-1.5 bg-white/80 rounded w-2/3"></div>
        </div>
      </div>
      
      {/* Chat bubble - left side */}
      <div className="absolute top-16 -left-6 bg-white border-2 border-gray-200 rounded-lg w-16 h-12 shadow-lg"></div>
    </div>
    
    {/* Person 1 - Left with yellow pants and blue shirt */}
    <div className="absolute bottom-8 left-8 flex flex-col items-center animate-bounce-slow z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="w-16 h-20 bg-blue-500 rounded-t-2xl relative">
        <div className="absolute -left-2 top-4 w-6 h-12 bg-blue-500 rounded-full transform -rotate-45"></div>
        <div className="absolute -right-2 top-4 w-6 h-12 bg-blue-500 rounded-full transform rotate-45"></div>
      </div>
      <div className="w-12 h-16 bg-yellow-400 rounded-b-lg"></div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Person 2 - Middle with orange outfit and coin */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="relative">
        <div className="w-16 h-20 bg-orange-400 rounded-t-2xl"></div>
        <div className="absolute -right-6 top-4 w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 flex items-center justify-center text-yellow-600 font-bold text-xl shadow-lg">
          $
        </div>
      </div>
      <div className="w-12 h-16 bg-orange-400 rounded-b-lg"></div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Person 3 - Right with blue pants and orange shirt */}
    <div className="absolute bottom-8 right-8 flex flex-col items-center z-10">
      <div className="w-12 h-12 bg-gray-900 rounded-full mb-1"></div>
      <div className="w-16 h-20 bg-orange-400 rounded-t-2xl relative"></div>
      <div className="w-12 h-16 bg-blue-500 rounded-b-lg relative">
        <div className="absolute -right-4 top-2 w-20 h-12 bg-yellow-400 rounded-lg shadow-lg"></div>
      </div>
      <div className="flex gap-2 mt-1">
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
        <div className="w-4 h-6 bg-gray-900 rounded-b"></div>
      </div>
    </div>
    
    {/* Ground line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
  </div>
);

export const Strategy: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      ),
      title: 'Collect Ideas',
      description: 'Nulla vitae elit libero pharetra augue dapibus.'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
        </svg>
      ),
      title: 'Data Analysis',
      description: 'Vivamus sagittis lacus augue laoreet vel.'
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Magic Touch',
      description: 'Cras mattis consectetur purus sit amet.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1">
            <HowItWorksIllustration />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 px-2 sm:px-0">
            <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              HOW IT WORKS?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight">
              Everything you need on creating a business process.
            </h2>

            {/* Features List */}
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
