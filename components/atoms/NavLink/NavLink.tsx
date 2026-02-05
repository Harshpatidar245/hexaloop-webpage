import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown, onClick }) => {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 transition-colors font-medium flex items-center gap-1 md:text-gray-600 md:hover:text-gray-900 [.flex-col_&]:text-gray-300 [.flex-col_&]:hover:text-white [.flex-col_&]:text-lg"
    >
      {children}
      {hasDropdown && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </Link>
  );
};
