import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { PageTransition } from '@/components/atoms/PageTransition';
import { SectionWrapper } from '@/components/atoms/SectionWrapper';
import { HireHero } from '@/components/organisms/HireHero';
import { HireForm } from '@/components/molecules/HireForm';

export default function HirePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <SectionWrapper>
            <HireHero />
          </SectionWrapper>
          
          {/* Form Section */}
          <SectionWrapper className="bg-gray-50">
            <div className="max-w-4xl mx-auto px-2 sm:px-4">
              <div className="text-center mb-8 sm:mb-12 px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                  Fill out the form below and we'll get back to you within 24 hours with a customized proposal
                </p>
              </div>
              <HireForm />
            </div>
          </SectionWrapper>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
