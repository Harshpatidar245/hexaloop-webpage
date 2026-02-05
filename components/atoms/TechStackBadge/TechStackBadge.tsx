import React from 'react';

interface TechStackBadgeProps {
  tech: string;
}

export const TechStackBadge: React.FC<TechStackBadgeProps> = ({ tech }) => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm sm:text-base hover:from-[#5EBEEB]/20 hover:to-[#4A9FD8]/20 hover:text-[#5EBEEB] transition-all duration-300 shadow-sm hover:shadow-md">
      {tech}
    </div>
  );
};
