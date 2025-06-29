import React, { useState } from 'react';

export default function HelpSupport() {
  const [formData, setFormData] = useState({
    email: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://alibackend.duckdns.org/terms_and_support/support/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Success logic
    setIsSubmitted(true);
    setFormData({ email: '', query: '' });

    // Optional: hide success message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error('Form submission error:', error);
    // Optional: show error to user
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-left mb-2">
          <h1 className="text-xl font-bold text-white mb-3">Help & Support</h1>
        </div>

        {/* Form Container */}
        <form className="p-8" onSubmit={handleSubmit}>
          {isSubmitted ? (
            // Success Message
            <div className="text-center py-8">
              <div className=" bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-300">
                Thank you for reaching out. We'll respond to your inquiry within 24 hours.
              </p>
            </div>
          ) : (
            // Form
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Email"
                  className="w-full h-11 px-4 bg-gray-700 border border-solid border-white rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  style={{ backgroundColor: '#374151' }}
                />
              </div>

              {/* query Field */}
              <div>
                <label htmlFor="query" className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  required
                  placeholder="Please describe your issue or question in detail..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-solid border-white rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  style={{ backgroundColor: '#374151', height: '110px' }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send 
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}