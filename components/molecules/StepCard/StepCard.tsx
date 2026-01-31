import React from 'react';
import { StepBadge } from '@/components/atoms/StepBadge';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
  variant?: 'glass' | 'solid' | 'blob';
}

export const StepCard: React.FC<StepCardProps> = ({ 
  number, 
  title, 
  description,
  delay = 0,
  variant = 'glass'
}) => {
  const variants = {
    glass: 'bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-[0_8px_32px_0_rgba(94,190,235,0.2)]',
    solid: 'bg-gradient-to-br from-[#E8F4F8] to-[#D4EEF9] shadow-xl',
    blob: 'bg-gradient-to-br from-[#E8F4F8] to-[#D4EEF9] shadow-2xl'
  };

  const containerClass = variant === 'blob' 
    ? 'rounded-[3rem]' 
    : 'rounded-3xl';

  return (
    <div 
      className={`${variants[variant]} ${containerClass} p-6 md:p-8 flex items-start gap-4 md:gap-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5EBEEB]/20 to-[#87CEEB]/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="relative z-10">
        <StepBadge number={number} size="lg" />
      </div>
      
      <div className="flex-1 relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5EBEEB] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
