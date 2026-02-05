'use client';

import React, { useRef } from 'react';
import { ProjectCard } from '@/components/molecules/ProjectCard';

// Project mockup illustrations
const MobileAppMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
    <div className="relative w-32 sm:w-40 md:w-48 h-56 sm:h-64 md:h-72 bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-2 sm:p-3">
      <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="text-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF8C6B] to-[#FF6B6B] rounded-full mx-auto mb-2"></div>
          <div className="h-1.5 sm:h-2 bg-gray-800 rounded w-2/3 mx-auto mb-1"></div>
          <div className="h-1 sm:h-1.5 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-lg"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-lg"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-400 rounded-lg"></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-400 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WebDesignMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 scale-75 sm:scale-90 md:scale-100">
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full max-w-md">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-3 md:p-4 col-span-2">
        <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-video bg-gradient-to-br from-[#5EBEEB] to-[#87CEEB] rounded"></div>
          <div className="space-y-1">
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded"></div>
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg sm:rounded-xl p-2 sm:p-3 aspect-video flex items-center justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFB347] to-[#FF8C6B] rounded-lg"></div>
      </div>
      <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 aspect-video">
        <div className="h-2 bg-gray-200 rounded mb-2"></div>
        <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

const MagazineMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-2 sm:gap-3 md:gap-4 scale-75 sm:scale-90 md:scale-100">
    <div className="relative w-24 sm:w-32 md:w-40 h-32 sm:h-40 md:h-48 bg-gray-900 rounded-lg shadow-2xl transform -rotate-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-2 sm:p-3">
        <div className="text-white text-[0.5rem] sm:text-xs font-bold mb-1 sm:mb-2">MAGAZINE</div>
        <div className="w-full h-16 sm:h-24 bg-gradient-to-br from-[#FFB347] to-[#FF6B6B] rounded mb-1 sm:mb-2"></div>
        <div className="space-y-1">
          <div className="h-1 bg-gray-600 rounded"></div>
          <div className="h-1 bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>
    </div>
    <div className="relative w-24 sm:w-32 md:w-40 h-32 sm:h-40 md:h-48 bg-white rounded-lg shadow-2xl overflow-hidden">
      <div className="p-2 sm:p-3 md:p-4">
        <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-2">
          <div className="aspect-square bg-gradient-to-br from-[#5EBEEB] to-[#87CEEB] rounded"></div>
          <div className="aspect-square bg-gray-200 rounded"></div>
        </div>
        <div className="space-y-1">
          <div className="h-1 bg-gray-300 rounded"></div>
          <div className="h-1 bg-gray-300 rounded"></div>
          <div className="h-1 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  </div>
);

const HealthAppMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-2 sm:gap-3 scale-75 sm:scale-90 md:scale-100">
    <div className="relative w-28 sm:w-36 md:w-44 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-5 md:p-6 transform -rotate-6">
      <div className="text-white mb-3 sm:mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">66</div>
        </div>
        <div className="text-[0.6rem] sm:text-xs opacity-90">bpm</div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 sm:h-10 md:h-12 bg-white/20 rounded-lg"></div>
        ))}
      </div>
    </div>
    <div className="relative w-28 sm:w-36 md:w-44 h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-5 md:p-6 transform rotate-6">
      <div className="bg-white rounded-xl p-2 sm:p-3 mb-3 sm:mb-4">
        <div className="text-blue-600 font-bold text-xs sm:text-sm mb-1">Good Mark</div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[0.6rem] sm:text-xs text-gray-600">Verified</span>
        </div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        <div className="h-6 sm:h-8 bg-white/20 rounded-lg"></div>
        <div className="h-6 sm:h-8 bg-white/20 rounded-lg"></div>
      </div>
    </div>
  </div>
);

const BrandingMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
    <div className="relative">
      <div className="w-40 sm:w-48 md:w-56 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center transform -rotate-6">
        <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl">BRAND</div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-white rounded-xl shadow-xl flex items-center justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFB347] to-[#FF6B6B] rounded-full"></div>
      </div>
    </div>
  </div>
);

const VideoProductionMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
    <div className="relative w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 sm:p-3">
        <div className="h-1 sm:h-1.5 bg-white/50 rounded"></div>
      </div>
    </div>
  </div>
);

export const LatestProjects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Select a Shop',
      category: 'MOBILE APP',
      image: <MobileAppMockup />
    },
    {
      id: 2,
      title: 'Dashboard & Analytics',
      category: 'WEB DESIGN',
      image: <WebDesignMockup />
    },
    {
      id: 3,
      title: 'Grocizy Grocery Delivery App',
      category: 'MOBILE APP',
      image: <HealthAppMockup />
    },
    {
      id: 4,
      title: 'Just My Roots Food Delivery App',
      category: 'MOBILE APP',
      image: <BrandingMockup />
    },
    {
      id: 5,
      title: 'Nutrition Center Fitness App',
      category: 'MOBILE APP',
      image: <MagazineMockup />
    },
    {
      id: 6,
      title: 'Aayam Career Institute Student App',
      category: 'MOBILE APP',
      image: <VideoProductionMockup />
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FCFF] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-32 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#5EBEEB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#FFB347]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#5EBEEB] text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase mb-3 sm:mb-4">
            LATEST PROJECTS
          </p>
          {/* <h2 className="text-xl sm:text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
            Check out some of our awesome projects<br className="hidden sm:block" />
            with creative ideas and great design.
          </h2> */}
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8 sm:mt-12">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5EBEEB] hover:bg-[#4AADE0] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#5EBEEB]/30"
              aria-label="Previous projects"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5EBEEB] hover:bg-[#4AADE0] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#5EBEEB]/30"
              aria-label="Next projects"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
