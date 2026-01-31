import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
