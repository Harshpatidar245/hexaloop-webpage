import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
              Instant Solutions{" "}
              <span className="text-[#5EBEEB]">for Your Idea!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Hexaloop is a global leading software products and services
              company. We provide wide range of services in various areas.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button href="#get-started">Get Started</Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative order-1 lg:order-2 mt-4 sm:mt-0">
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-[#FFB347] rounded-full animate-float"></div>
              <div className="absolute top-12 right-12 sm:top-20 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 bg-[#FF6B6B] rounded-full animate-float-delayed"></div>
              <div className="absolute -top-2 right-16 sm:-top-5 sm:right-32 w-14 h-6 sm:w-20 sm:h-8 bg-[#FFB347] rounded-full transform -rotate-12 animate-float"></div>

              {/* Blue Blobs */}
              <div className="absolute top-1/4 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-[#5EBEEB] rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#5EBEEB] rounded-full opacity-30 blur-2xl animate-pulse-delayed"></div>

              {/* Main Illustration Container */}
              <div className="relative z-10 bg-[#FF8C6B] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-[#FFE5D9] rounded-lg p-4 relative overflow-hidden">
                  {/* Pen Tool Icon */}
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                  </div>

                  {/* Graph Lines */}
                  <svg className="w-full h-full" viewBox="0 0 200 150">
                    <circle cx="40" cy="80" r="6" fill="#FF6B6B" />
                    <circle cx="80" cy="40" r="6" fill="#FF6B6B" />
                    <circle cx="120" cy="60" r="6" fill="#FF6B6B" />
                    <circle cx="160" cy="30" r="6" fill="#FF6B6B" />
                    <path
                      d="M40,80 L80,40 L120,60 L160,30"
                      stroke="#FF6B6B"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Color Palette */}
                <div className="absolute -right-4 bottom-20 bg-white p-3 rounded-lg shadow-xl transform rotate-12 hover:rotate-0 transition-transform">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="w-8 h-8 bg-[#FFB347] rounded"></div>
                    <div className="w-8 h-8 bg-[#FF6B6B] rounded"></div>
                    <div className="w-8 h-8 bg-[#5EBEEB] rounded"></div>
                    <div className="w-8 h-8 bg-[#FFE66D] rounded"></div>
                  </div>
                </div>

                {/* Tablet Device */}
                <div className="absolute -left-8 bottom-8 bg-gray-800 rounded-lg p-2 shadow-2xl w-32 transform -rotate-6 hover:rotate-0 transition-transform">
                  <div className="bg-[#5EBEEB] rounded aspect-video"></div>
                </div>
              </div>

              {/* Character Illustrations */}
              <div className="absolute top-0 right-1/4 w-12 h-16 bg-gray-800 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-20 left-8 w-12 h-16 bg-gray-800 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-0 right-8 w-12 h-16 bg-gray-800 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
