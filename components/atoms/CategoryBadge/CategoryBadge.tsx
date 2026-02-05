import React from 'react';

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-400 uppercase">
      {category}
    </span>
  );
};
