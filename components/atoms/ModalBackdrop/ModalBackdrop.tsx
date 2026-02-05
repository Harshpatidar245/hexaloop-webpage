'use client';

import React from 'react';

interface ModalBackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({ children, onClick }) => {
  return (
    <div
      className="backdrop-blur-sm animate-fade-in"
      onClick={onClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1999,
        padding: '1rem',
        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
};
