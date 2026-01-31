import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-white text-lg md:text-xl font-semibold mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
};
