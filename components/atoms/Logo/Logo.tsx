import React from 'react';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
      Hexaloop
    </Link>
  );
};
