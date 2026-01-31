import React from 'react';

interface StepBadgeProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
}

export const StepBadge: React.FC<StepBadgeProps> = ({ number, size = 'md' }) => {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl'
  };

  return (
    <div className="relative flex-shrink-0">
      {/* Outer glow ring */}
      <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-[#5EBEEB] to-[#87CEEB] p-[3px] shadow-lg`}>
        {/* Inner circle */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E8F4F8] to-[#D4EEF9] flex items-center justify-center relative overflow-hidden">
          {/* Glossy shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"></div>
          
          {/* Number */}
          <span className="relative z-10 font-bold bg-gradient-to-br from-[#5EBEEB] to-[#3A9FD5] bg-clip-text text-transparent">
            {number}
          </span>
        </div>
      </div>
      
      {/* Subtle pulse ring */}
      <div className={`${sizes[size]} rounded-full bg-[#5EBEEB]/20 absolute inset-0 animate-ping opacity-75`}></div>
    </div>
  );
};
