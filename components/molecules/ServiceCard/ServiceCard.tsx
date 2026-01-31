import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  href = '#'
}) => {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Icon/Illustration */}
      <div className="mb-8 transform transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-xs">
        {description}
      </p>

      {/* Learn More Link */}
      <a 
        href={href}
        className="text-[#5EBEEB] font-medium hover:text-[#4AADE0] transition-colors inline-flex items-center gap-2 group/link"
      >
        Learn More 
        <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
      </a>
    </div>
  );
};
