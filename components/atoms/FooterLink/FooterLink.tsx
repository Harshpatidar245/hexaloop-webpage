import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <Link 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base block py-1"
    >
      {children}
    </Link>
  );
};
