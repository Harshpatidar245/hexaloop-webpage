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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-[#1a2332] z-[100] transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ touchAction: 'none' }}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 pt-24 px-8 pb-8 overflow-hidden">
          <Navigation isMobile onLinkClick={onClose} />
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-base mb-2">work@hexaloop.com</p>
            <p className="text-gray-300 text-base">+91-887 117 1445</p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
