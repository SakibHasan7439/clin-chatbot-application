import React from 'react';
import { Link } from 'react-router';

export default function GetStarted() {
  return (
    <div className="bg-[#1e293b]">
      {/* Main Get Started Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Get Started</h2>
          
          {/* Description */}
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Ready to transform your clinical documentation process? Contact our team to learn how Clin Technologies can be tailored to your 
            specific healthcare setting.
          </p>
          
          {/* Contact Form Area */}
          <div className="bg-transparent border border-[#2b4261] rounded-lg p-12 mb-12">
            <div className="text-center">
              <p className="text-gray-400 text-base">
                Or reach us directly via email at{' '}
                <a 
                  href="mailto:support@clintechso.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  support@clintechso.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={"/login"}>
              <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:border-blue-300 hover:text-blue-300 transition-colors duration-200 min-w-[120px]">
              Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 min-w-[120px]">
              Signup
            </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-slate-700 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="flex gap-6 mb-4 sm:mb-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              Terms of Use
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Clin Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}