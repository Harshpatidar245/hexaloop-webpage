'use client';

import React, { useEffect } from 'react';
import { Navigation } from '@/components/molecules/Navigation';
import { SocialLinks } from '@/components/molecules/SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full pt-24 px-8">
        <Navigation isMobile onLinkClick={onClose} />
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-2">info@email.com</p>
          <p className="text-gray-300">00 (123) 456 78 90</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
