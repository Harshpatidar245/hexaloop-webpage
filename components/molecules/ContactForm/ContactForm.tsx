'use client';

import React, { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { TextArea } from '@/components/atoms/TextArea';
import { Button } from '@/components/atoms/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-5 sm:space-y-6 px-2 sm:px-0 pb-16 sm:pb-20">
      <Input
        id="name"
        label="Your Name"
        placeholder="John Doe"
        required
        value={formData.name}
        onChange={handleChange}
      />
      
      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        required
        value={formData.email}
        onChange={handleChange}
      />
      
      <Input
        id="phone"
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 000-0000"
        value={formData.phone}
        onChange={handleChange}
      />
      
      <TextArea
        id="message"
        label="Your Message"
        placeholder="Tell us about your project..."
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
      />
      
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center text-sm sm:text-base">
          ✓ Message sent successfully! We'll get back to you soon.
        </p>
      )}
    </form>
  );
};
