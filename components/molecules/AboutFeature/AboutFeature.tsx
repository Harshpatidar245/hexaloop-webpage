import React from 'react';
import { CheckmarkItem } from '@/components/atoms/CheckmarkItem';

interface AboutFeatureProps {
  features: string[];
}

export const AboutFeature: React.FC<AboutFeatureProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <CheckmarkItem key={index} text={feature} />
      ))}
    </div>
  );
};
