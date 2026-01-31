import React from 'react';

const socialLinks = [
  { icon: '𝕏', href: '#', label: 'Twitter' },
  { icon: 'f', href: '#', label: 'Facebook' },
  { icon: '🌐', href: '#', label: 'Website' },
  { icon: '📷', href: '#', label: 'Instagram' },
  { icon: '▶', href: '#', label: 'YouTube' },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 mt-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-gray-400 hover:text-white transition-colors text-xl"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
