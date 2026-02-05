import React from 'react';

interface SectionHeadingProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  preTitle, 
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`text-center mb-16 md:mb-20 ${className}`}>
      {preTitle && (
        <p className="text-[#5EBEEB] text-sm md:text-base font-semibold tracking-wide uppercase mb-4">
          {preTitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight px-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
