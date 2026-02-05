'use client';

import React from 'react';
import { NavLink } from '@/components/atoms/NavLink';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
          onClick={onLinkClick}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
