import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
      <Image 
        src="/icons/logo.png" 
        alt="Hexaloop Logo" 
        width={40} 
        height={40}
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
      <span className="text-2xl md:text-3xl font-bold">
        <span className="text-gray-800">Hexa</span>
        <span className="text-[#5EBEEB]">loop</span>
      </span>
    </Link>
  );
};
