import React from 'react';

interface ProjectCardProps {
  image: React.ReactNode;
  title: string;
  category: string;
  description?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description }) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image Container */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md mb-5 aspect-[4/3] transform transition-all duration-300 group-hover:shadow-xl">
        {image}
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium uppercase tracking-wide">
          {category}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}
        <button className="text-[#5EBEEB] font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          See Project
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
