import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-md bg-pink-600 flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center space-x-4 pt-1 text-xs font-semibold text-gray-800">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              PRODUCT
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              LEGAL
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;