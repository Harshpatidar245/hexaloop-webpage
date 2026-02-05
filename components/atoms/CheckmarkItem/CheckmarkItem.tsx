import React from 'react';

interface CheckmarkItemProps {
  text: string;
}

export const CheckmarkItem: React.FC<CheckmarkItemProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-[#5EBEEB]/10 rounded-full mt-0.5">
        <svg 
          className="w-3 h-3 md:w-4 md:h-4 text-[#5EBEEB]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-1">
        {text}
      </p>
    </div>
  );
};
