import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section className={`py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
