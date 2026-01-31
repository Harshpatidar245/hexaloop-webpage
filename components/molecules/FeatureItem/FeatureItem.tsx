import React from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 md:gap-6 group">
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
