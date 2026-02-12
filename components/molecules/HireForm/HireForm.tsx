'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { TextArea } from '@/components/atoms/TextArea';
import { Button } from '@/components/atoms/Button';

const TECH_STACK = [
  'React', 'Next.js', 'Vue.js', 'Angular',
  'Node.js', 'Python', 'PHP', 'Java',
  'React Native', 'Flutter', 'iOS', 'Android',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase',
  'AWS', 'Azure', 'Docker', 'Kubernetes'
];

const SERVICE_TYPES = [
  'Full Stack Development',
  'Frontend Development',
  'Backend Development',
  'Mobile App Development',
  'UI/UX Design',
  'DevOps & Cloud',
  'Consulting & Architecture',
  'Maintenance & Support'
];

const BUDGET_RANGES = [
  'Under ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000 - ₹5,00,000',
  'Above ₹5,00,000'
];

const PROJECT_TIMELINES = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Ongoing/Long-term'
];

export const HireForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    numberOfDevelopers: '',
    techStack: [] as string[],
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTechStackToggle = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter((t) => t !== tech)
        : [...prev.techStack, tech],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          numberOfDevelopers: '',
          techStack: [],
          projectDescription: '',
          budget: '',
          timeline: '',
          additionalRequirements: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
        
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8 px-2 sm:px-0 pb-16 sm:pb-20">
      {/* Personal Information */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Personal Information</h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <Input
            id="name"
            label="Full Name"
            placeholder="Rahul Sharma"
            required
            value={formData.name}
            onChange={handleChange}
          />
          
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="rahul@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
          
          <Input
            id="phone"
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          
          <Input
            id="company"
            label="Company Name (Optional)"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Project Details</h3>
        
        <div className="space-y-5">
          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
              What service do you need? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400"
                style={{ backgroundImage: 'none' }}
              >
                <option value="" disabled>Select a service</option>
                {SERVICE_TYPES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Number of Developers */}
          <div>
            <label htmlFor="numberOfDevelopers" className="block text-sm font-medium text-gray-700 mb-2">
              How many developers do you need? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="numberOfDevelopers"
                required
                value={formData.numberOfDevelopers}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400"
                style={{ backgroundImage: 'none' }}
              >
                <option value="" disabled>Select number of developers</option>
                <option value="1">1 Developer</option>
                <option value="2">2 Developers</option>
                <option value="3-5">3-5 Developers</option>
                <option value="5-10">5-10 Developers</option>
                <option value="10+">More than 10 Developers</option>
                <option value="team">Full Development Team</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Which technologies do you need? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {TECH_STACK.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechStackToggle(tech)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    formData.techStack.includes(tech)
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {formData.techStack.length === 0 && (
              <p className="text-xs text-gray-500 mt-2">Please select at least one technology</p>
            )}
          </div>

          {/* Project Description */}
          <TextArea
            id="projectDescription"
            label="Project Description"
            placeholder="Describe your project requirements, goals, and any specific features you need..."
            required
            rows={6}
            value={formData.projectDescription}
            onChange={handleChange}
          />

          {/* Budget & Timeline */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Project Budget <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" disabled>Select budget range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                Project Timeline <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" disabled>Select timeline</option>
                  {PROJECT_TIMELINES.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <TextArea
            id="additionalRequirements"
            label="Additional Requirements (Optional)"
            placeholder="Any other details, preferences, or questions you'd like to share..."
            rows={4}
            value={formData.additionalRequirements}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isSubmitting || formData.techStack.length === 0}
      >
        {isSubmitting ? 'Sending Request...' : 'Submit Hiring Request'}
      </Button>
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 text-center text-sm sm:text-base">
            ✓ Your hiring request has been received! We'll review it and get back to you within 24 hours.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-center text-sm sm:text-base">
            ✗ Failed to submit request. Please try again or contact us directly at career24x7growth@gmail.com
          </p>
        </div>
      )}
    </form>
  );
};
