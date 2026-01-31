'use client';

import React from 'react';
import { NavLink } from '@/components/atoms/NavLink';

const navItems = [
  { label: 'Demos', href: '#', hasDropdown: true },
  { label: 'Pages', href: '#', hasDropdown: true },
  { label: 'Projects', href: '#', hasDropdown: true },
  { label: 'Blog', href: '#', hasDropdown: true },
  { label: 'Blocks', href: '#', hasDropdown: true },
  { label: 'Documentation', href: '#', hasDropdown: true },
];

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isMobile, onLinkClick }) => {
  return (
    <nav className={isMobile ? 'flex flex-col gap-6' : 'hidden lg:flex items-center gap-8'}>
      {navItems.map((item) => (
        <NavLink 
          key={item.label} 
          href={item.href} 
          hasDropdown={item.hasDropdown}
          onClick={onLinkClick}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
