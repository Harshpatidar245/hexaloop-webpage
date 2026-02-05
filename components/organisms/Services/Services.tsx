import React from 'react';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import { ServiceCard } from '@/components/molecules/ServiceCard';

const WebDesignIcon = () => (
  <div className="relative w-64 h-48">
    {/* Background blobs */}
    <div className="absolute top-8 left-8 w-24 h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    
    {/* Main screen */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8C6B] rounded-2xl w-48 h-32 shadow-xl p-3">
      <div className="bg-[#FFB347] h-6 rounded-t-lg mb-2 flex items-center px-2 gap-1">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-white/50 rounded w-3/4"></div>
        <div className="h-2 bg-white/50 rounded w-1/2"></div>
      </div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#FF6B6B] rounded-lg flex items-center justify-center text-white text-xs">▶</div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-4 right-8 w-12 h-12 bg-[#FFB347] rounded-lg transform rotate-12 animate-float"></div>
    <div className="absolute top-0 left-12 w-8 h-8 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-4 left-4 w-8 h-12 bg-gray-800 rounded-full"></div>
  </div>
);

const GraphicDesignIcon = () => (
  <div className="relative w-64 h-48">
    {/* Background blobs */}
    <div className="absolute top-8 right-8 w-24 h-24 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 left-8 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    
    {/* Monitor */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-800 rounded-lg w-44 h-32 shadow-2xl p-2">
        <div className="bg-[#FF8C6B] rounded h-full w-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB347] to-[#FF8C6B]"></div>
          <svg className="w-16 h-16 text-white z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>
      <div className="bg-gray-800 w-16 h-4 mx-auto mt-1"></div>
      <div className="bg-gray-700 w-24 h-2 mx-auto mt-1 rounded"></div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-6 left-6 w-10 h-10 bg-[#FFB347] rounded-full animate-float"></div>
    <div className="absolute top-2 right-12 w-8 h-8 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-8 right-4 w-6 h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-8 left-8 w-6 h-10 bg-gray-800 rounded-full"></div>
  </div>
);

const AnimationIcon = () => (
  <div className="relative w-64 h-48">
    {/* Background blobs */}
    <div className="absolute top-8 left-12 w-28 h-28 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse"></div>
    <div className="absolute bottom-8 right-12 w-32 h-32 bg-[#5EBEEB] rounded-full opacity-30 blur-xl animate-pulse-delayed"></div>
    
    {/* 3D Text */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
      <div className="text-[#FF8C6B] text-7xl font-black transform -rotate-12 relative">
        3
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-1 translate-y-1 -z-10">3</div>
      </div>
      <div className="text-[#FF8C6B] text-7xl font-black transform rotate-6 relative">
        D
        <div className="absolute inset-0 text-[#FFB347] transform translate-x-1 translate-y-1 -z-10">D</div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-4 right-8 w-10 h-10 bg-[#FF6B6B] rounded-full animate-float"></div>
    <div className="absolute top-8 left-4 w-8 h-8 bg-[#FFB347] rounded-full animate-float-delayed"></div>
    <div className="absolute bottom-4 right-4 w-6 h-10 bg-gray-800 rounded-full"></div>
    <div className="absolute bottom-8 left-12 w-6 h-10 bg-gray-800 rounded-full"></div>
    
    {/* Devices */}
    <div className="absolute bottom-2 left-8 bg-gray-800 w-16 h-12 rounded shadow-lg"></div>
    <div className="absolute bottom-2 right-8 bg-gray-800 w-20 h-14 rounded shadow-lg"></div>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Website Design',
      description: 'We offers creative, unique, economic, and trendy Website Design. We provide exclusive designs of your ideas with multiple options to choose from.',
      icon: <WebDesignIcon />,
      href: '#web-design'
    },
    {
      title: 'Mobile Application',
      description: 'We develop mobile apps which works on both iOS & Android platforms. We are expertise in building all type of custom apps for startup to large businesses.',
      icon: <GraphicDesignIcon />,
      href: '#mobile-app'
    },
    {
      title: 'Graphics & Multimedia Design',
      description: 'We offer a range of graphic design services such as Logo Design, Business cards, Brochure Design, Banner Design, Newsletter Design, and more.',
      icon: <AnimationIcon />,
      href: '#graphic-design'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EDF7FC] to-white pb-32 sm:pb-36 md:pb-40">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-16 sm:h-20 md:h-24">
        <svg 
          className="absolute bottom-0 w-full h-24" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading 
          preTitle="WHAT WE DO?"
          title="The service we offer is specifically designed to meet your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="white"
          style={{ height: '120px', display: 'block' }}
        >
          <path d="M0,50 C120,20 180,80 300,50 C420,20 480,80 600,50 C720,20 780,80 900,50 C1020,20 1080,80 1200,50 C1320,20 1380,80 1440,50 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
