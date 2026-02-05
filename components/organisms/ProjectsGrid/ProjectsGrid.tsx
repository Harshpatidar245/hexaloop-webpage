'use client';

import React from 'react';
import { ProjectCard } from '@/components/molecules/ProjectCard';
import type { Project } from '@/types/project';

// Simple, clean image placeholders
const EcommerceImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
    <div className="text-white text-6xl">🛍️</div>
  </div>
);

const FitnessImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 flex items-center justify-center">
    <div className="text-white text-6xl">💪</div>
  </div>
);

const RealEstateImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-red-400 flex items-center justify-center">
    <div className="text-white text-6xl">🏠</div>
  </div>
);

const DashboardImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
    <div className="text-white text-6xl">📊</div>
  </div>
);

const AIImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-fuchsia-400 to-pink-400 flex items-center justify-center">
    <div className="text-white text-6xl">🤖</div>
  </div>
);

const BlockchainImage = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center">
    <div className="text-white text-6xl">⛓️</div>
  </div>
);

// Projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform with advanced features',
    detailedDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, advanced product filtering, user reviews and ratings, and an intuitive admin dashboard. The platform handles thousands of daily transactions with 99.9% uptime.',
    image: <EcommerceImage />,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveLink: 'https://example-ecommerce.com',
  },
  {
    id: '2',
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Track your workouts and achieve your fitness goals',
    detailedDescription: 'Developed a cross-platform mobile application that helps users track their workouts, monitor progress, and achieve fitness goals. Features include custom workout plans, progress tracking, social sharing, nutrition tracking, and integration with popular fitness devices.',
    image: <FitnessImage />,
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    liveLink: 'https://example-fitness.com',
    githubLink: 'https://github.com/example/fitness-app',
  },
  {
    id: '3',
    title: 'Real Estate Website',
    category: 'Web Design',
    description: 'Beautiful property listings with virtual tours',
    detailedDescription: 'Designed and developed an elegant real estate platform featuring property listings, virtual tours, advanced search filters, mortgage calculators, and agent profiles. The site provides an immersive experience for potential buyers with high-quality imagery and smooth animations.',
    image: <RealEstateImage />,
    techStack: ['Next.js', 'Tailwind CSS', 'Mapbox', 'Sanity CMS', 'Framer Motion'],
    liveLink: 'https://example-realestate.com',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    category: 'Web Development',
    description: 'Comprehensive business intelligence platform',
    detailedDescription: 'Created a powerful analytics dashboard that provides real-time insights into business metrics. Features include customizable widgets, data visualization, automated reporting, team collaboration tools, and integration with multiple data sources.',
    image: <DashboardImage />,
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'WebSocket'],
    liveLink: 'https://example-analytics.com',
    githubLink: 'https://github.com/example/analytics',
  },
  {
    id: '5',
    title: 'AI Chatbot Assistant',
    category: 'AI/ML',
    description: 'Intelligent conversational AI for customer support',
    detailedDescription: 'Built an advanced AI-powered chatbot that provides intelligent customer support, handles complex queries, learns from interactions, and integrates seamlessly with existing CRM systems. The bot supports multiple languages and can handle thousands of concurrent conversations.',
    image: <AIImage />,
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Redis'],
    githubLink: 'https://github.com/example/ai-chatbot',
  },
  {
    id: '6',
    title: 'NFT Marketplace',
    category: 'Blockchain',
    description: 'Decentralized marketplace for digital assets',
    detailedDescription: 'Developed a decentralized NFT marketplace on Ethereum blockchain featuring minting, buying, selling, and auctioning of digital assets. Includes wallet integration, gas optimization, royalty management, and a user-friendly interface for both creators and collectors.',
    image: <BlockchainImage />,
    techStack: ['React', 'Solidity', 'Ethers.js', 'IPFS', 'Hardhat', 'Tailwind CSS'],
    liveLink: 'https://example-nft.com',
    githubLink: 'https://github.com/example/nft-marketplace',
  },
];

interface ProjectsGridProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {projects.map((project) => (
        <div key={project.id} onClick={() => onProjectClick(project)}>
          <ProjectCard
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
};