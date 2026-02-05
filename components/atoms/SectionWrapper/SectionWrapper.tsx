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
    <section className={`py-12 sm:py-16 md:py-20 lg:py-32 px-3 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
