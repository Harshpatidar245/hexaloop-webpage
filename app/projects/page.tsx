'use client';

import React, { useState } from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ProjectsGrid } from '@/components/organisms/ProjectsGrid';
import { ProjectModal } from '@/components/organisms/ProjectModal';
import { PageTransition } from '@/components/atoms/PageTransition';
import { SectionWrapper } from '@/components/atoms/SectionWrapper';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import type { Project } from '@/types/project';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <SectionWrapper>
            <div className="text-center mb-12 md:mb-16">
              <SectionHeading
                title="Our Projects"
                subtitle="Explore our portfolio of innovative solutions and successful implementations"
              />
            </div>
            <ProjectsGrid onProjectClick={handleProjectClick} />
          </SectionWrapper>
        </main>
        <Footer />
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </div>
    </PageTransition>
  );
}
