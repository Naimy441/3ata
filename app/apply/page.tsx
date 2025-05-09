'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ApplyPage() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition < 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-gray-700 hover:bg-white transition-all duration-200">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </button>
        </Link>
      </div>

      {/* Floating Action Button */}
      {showButton && (
        <button
          onClick={scrollToForm}
          className="fixed bottom-8 right-8 z-[100] bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300 animate-bounce-subtle hover:scale-110"
          aria-label="Scroll to application form"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      )}

      {/* Banner Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Join 3ata's Vision</h1>
          
          <p className="text-xl leading-relaxed">
            We are honored to introduce 3ata (pronounced عَطَاء, an Arabic word meaning to give generously). 
            Our vision—sincerely, for the sake of Allah—is to help masjids around the world strengthen their 
            connection with their local communities through beautifully designed, feature-rich, and fully 
            integrated mobile apps and websites.
          </p>

          <p className="text-xl leading-relaxed">
            Over the past year, by Allah's grace, we've partnered with four masjids across Texas and North Carolina, 
            helping them reach over 1,300 app downloads—all in service to the Ummah.
          </p>

          <p className="text-xl leading-relaxed">
            Now, we're looking for 5 more masjids—regardless of size—to receive a fully custom digital solution at no cost. 
            This includes a deeply integrated website and mobile app tailored to your community's needs.
          </p>

          <p className="text-xl leading-relaxed">
            Already have a website or mobile app? No worries. We'll work with you to ensure our integrated solution 
            exceeds your expectations—bringing everything together seamlessly and beautifully.
          </p>

          <p className="text-xl leading-relaxed">
            Spaces are limited and offered on a first-come, first-served basis, so apply soon to be among the first 
            to benefit from this opportunity.
          </p>

          <p className="text-xl leading-relaxed text-center italic">
            May Allah accept from all of us.
          </p>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm bg-opacity-95 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Apply for Your Digital Solution</h2>
            <p className="text-gray-600 text-lg">Fill out the form below to get started with your custom mosque app</p>
          </div>
          
          <form action="https://formspree.io/f/xvgakyjg" method="POST" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="mosqueName" className="block text-sm font-medium text-gray-700">
                  Mosque Name *
                </label>
                <input
                  type="text"
                  id="mosqueName"
                  name="mosqueName"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="Enter your mosque name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Your Role at the Mosque *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="e.g., Imam, Board Member, Admin"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Mosque Address *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                placeholder="Enter your mosque's full address"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="https://your-mosque.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="app" className="block text-sm font-medium text-gray-700">
                  Current Mobile App (if any)
                </label>
                <input
                  type="url"
                  id="app"
                  name="app"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                  placeholder="App Store or Play Store link"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 text-base py-3 px-4"
                placeholder="Please share any additional information about your mosque and community that might help us better serve you."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
}
