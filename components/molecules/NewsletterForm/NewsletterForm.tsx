'use client';

import React, { useState } from 'react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        className="flex-1 px-4 py-3 bg-[#3D4F5C] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EBEEB] transition-all"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[#5EBEEB] text-white font-medium rounded-lg hover:bg-[#4AADE0] transition-colors duration-300"
      >
        Join
      </button>
    </form>
  );
};
