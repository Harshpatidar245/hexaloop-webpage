'use client';

import React, { useState } from 'react';
import { AccordionItem } from '@/components/molecules/AccordionItem';

const WhyChooseUsIllustration = () => (
  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] mb-8 sm:mb-10 md:mb-0">
    {/* Background blobs */}
    <div className="absolute top-12 left-8 w-40 h-40 bg-[#5EBEEB] rounded-full opacity-30 blur-2xl animate-pulse"></div>
    <div className="absolute bottom-12 right-8 w-48 h-48 bg-[#5EBEEB] rounded-full opacity-30 blur-2xl animate-pulse-delayed"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#87CEEB] rounded-full opacity-20 blur-3xl"></div>
    
    {/* Main notepad/board */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FFE5CC] to-[#FFD4A3] rounded-2xl sm:rounded-3xl w-56 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 shadow-2xl p-4 sm:p-5 md:p-6 rotate-[-2deg]">
      {/* Rings at top */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center mb-4 sm:mb-6 md:mb-8">
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 sm:border-3 md:border-4 border-[#FF8C6B] rounded-full"></div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 sm:border-3 md:border-4 border-[#FF8C6B] rounded-full"></div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 sm:border-3 md:border-4 border-[#FF8C6B] rounded-full"></div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 sm:border-3 md:border-4 border-[#FF8C6B] rounded-full"></div>
      </div>
      
      {/* Lightbulb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-28 sm:w-24 sm:h-32 bg-gradient-to-b from-[#FFD966] to-[#FFB347] rounded-full shadow-lg flex items-end justify-center pb-3 sm:pb-4">
        <div className="w-10 h-3 sm:w-12 sm:h-4 bg-[#FF8C6B] rounded"></div>
        {/* Filament */}
        <svg className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-6 h-10 sm:w-8 sm:h-12" viewBox="0 0 40 60">
          <path d="M20 10 Q10 30, 20 50 M20 10 Q30 30, 20 50" stroke="#FF6B6B" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Monitor */}
      <div className="absolute bottom-8 right-4 sm:bottom-10 sm:right-6 md:bottom-12 md:right-8 bg-gray-800 w-20 h-14 sm:w-22 sm:h-15 md:w-24 md:h-16 rounded shadow-xl">
        <div className="bg-[#FF8C6B] w-full h-10 sm:h-11 md:h-12 rounded-t"></div>
        <div className="bg-gray-700 w-10 h-1.5 sm:w-11 sm:h-2 md:w-12 md:h-2 mx-auto mt-1"></div>
      </div>
    </div>
    
    {/* Person 1 - Left */}
    <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-8 w-10 h-16 sm:w-12 sm:h-20 flex flex-col items-center animate-bounce-slow">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B6B] rounded-t-full mt-1"></div>
    </div>
    
    {/* Person 2 - Right top */}
    <div className="absolute top-16 right-8 sm:top-20 sm:right-12 w-10 h-16 sm:w-12 sm:h-20 flex flex-col items-center animate-float">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5EBEEB] rounded-t-full mt-1"></div>
    </div>
    
    {/* Person 3 - Bottom center */}
    <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-16 sm:w-12 sm:h-20 flex flex-col items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFB347] rounded-t-full mt-1"></div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-6 left-8 sm:top-8 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute top-2 right-12 sm:top-4 sm:right-20 w-12 h-6 sm:w-16 sm:h-8 bg-[#FFB347] transform rotate-12 rounded-full animate-float-delayed"></div>
  </div>
);

export const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const features = [
    {
      title: 'High Quality Work',
      content: 'We believe in providing high quality of work to our clients. Our experienced team ensures every project meets the highest standards of excellence and reliability.'
    },
    {
      title: 'Affordable Prices',
      content: 'We believe in providing application at affordable prices. Quality software development should be accessible to businesses of all sizes without compromising on features or performance.'
    },
    {
      title: 'On-Time Delivery',
      content: 'We believe in delivering our clients work on time. Our project management approach ensures timely completion while maintaining quality and meeting all requirements.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-b from-white to-[#F8FCFF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Illustration */}
          <div className="order-2 lg:order-1 px-4 sm:px-0">
            <WhyChooseUsIllustration />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 px-2 sm:px-0">
            <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4 text-center lg:text-left">
              WHY CHOOSE US?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 leading-tight text-center lg:text-left">
              We bring solutions to make life easier.
            </h2>

            {/* Accordion */}
            <div className="space-y-0">
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  title={feature.title}
                  content={feature.content}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
