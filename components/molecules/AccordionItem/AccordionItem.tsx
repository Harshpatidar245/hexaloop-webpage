'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  content, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between text-left group"
      >
        <div className="flex items-center gap-3 flex-1">
          <svg
            className={`w-5 h-5 text-[#5EBEEB] transition-all duration-500 ease-in-out flex-shrink-0 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ease-in-out ${
            isOpen ? 'text-gray-900' : 'text-gray-700'
          }`}>
            {title}
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-8 pr-4 transition-all duration-300 ease-in-out">
          {content}
        </p>
      </div>
    </div>
  );
};
