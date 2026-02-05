import React from 'react';
import { AboutFeature } from '@/components/molecules/AboutFeature';

const MegaphoneIcon = () => (
  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className="w-10 h-10 md:w-14 md:h-14 text-gray-800"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" 
      />
    </svg>
  </div>
);

const TeamCollage = () => (
  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
    {/* Background decorative elements */}
    <div className="absolute top-8 right-12 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-20 blur-2xl animate-pulse"></div>
    <div className="absolute bottom-12 left-8 w-40 h-40 bg-[#FFB347] rounded-full opacity-20 blur-2xl animate-pulse-delayed"></div>
    
    {/* Main grid container */}
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 max-w-lg mx-auto px-4">
        {/* Top-left: Meeting room */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full mx-auto mb-2"></div>
              <div className="space-y-1">
                <div className="h-2 bg-blue-300 rounded w-3/4 mx-auto"></div>
                <div className="h-2 bg-blue-300 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top-right: Person portrait */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] row-span-2 transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-300 rounded-full mb-4"></div>
            <div className="w-3/4 h-12 bg-orange-300/50 rounded-t-3xl"></div>
          </div>
        </div>

        {/* Bottom-left: Person at desk */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] transform hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-300 rounded-full mb-2"></div>
            <div className="w-3/4 h-8 bg-green-300/50 rounded-t-2xl"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative dots pattern */}
    <div className="absolute top-4 left-4 grid grid-cols-6 gap-2 opacity-30">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-[#5EBEEB] rounded-full"></div>
      ))}
    </div>

    {/* Floating circle button */}
    <div className="absolute bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-[#5EBEEB] rounded-full shadow-lg flex items-center justify-center animate-float">
      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
      </svg>
    </div>
  </div>
);

export const WhoAreWe: React.FC = () => {
  const features = [
    'High quality software development services',
    'Focused on client specific requirements',
    'Professional and on-time delivery',
    'Affordable pricing and reliable solutions'
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="px-2 sm:px-0">
            {/* Icon and Heading */}
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <MegaphoneIcon />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Who Are We?
              </h2>
            </div>

            {/* Main Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Hexaloop is a global leading software products and services company. We provide wide range of services in various areas.
            </p>

            {/* Secondary Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10">
              We offer high quality and reliable software development services focused on the client's specific requirement. Our main aim is to provide our clients best quality applications and deliver them on time without any hassle. We have efficient and experienced team of developers who have very good expertise in various technologies.
            </p>

            {/* Feature List */}
            <AboutFeature features={features} />
          </div>

          {/* Right Image Collage */}
          <div className="px-4 sm:px-0 order-first lg:order-last">
            <TeamCollage />
          </div>
        </div>
      </div>
    </section>
  );
};
