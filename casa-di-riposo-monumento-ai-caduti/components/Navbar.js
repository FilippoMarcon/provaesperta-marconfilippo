"use client";

import { useState } from 'react';

export default function Navbar({ menuItems, menuDropdowns }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDropdownClick = (dropdownKey) => {
        setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
    };

    return (
      <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-lg w-full flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 fixed top-0 z-50 shadow-2xl">
        {/* Desktop Menu */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              item.dropdown ? (
                <div key={index} className="relative">
                  <a 
                    href={item.href} 
                    className="text-white font-semibold hover:text-blue-300 transition-colors duration-300 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownClick(item.dropdownKey);
                    }}
                  >
                    {item.label}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <div className={`absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-sm shadow-xl rounded-lg py-2 z-10 ${
                    openDropdown === item.dropdownKey ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  } transition-all duration-300`}>
                    {menuDropdowns[item.dropdownKey].map((dropdownItem, i) => (
                      <a 
                        key={i} 
                        href={dropdownItem.href} 
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50/50 hover:text-blue-600 transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a 
                  key={index} 
                  href={item.href} 
                  className={`text-white font-semibold ${
                    item.active ? 'border-b-2 border-blue-400' : ''
                  } hover:text-blue-300 transition-colors duration-300`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>


        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all duration-300`}>
          <div className="absolute top-0 right-0 p-4">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-8 mt-16">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-white text-xl font-medium hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="http://www.regione.veneto.it/" 
          className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          <span>Regione Veneto</span>
        </a>
      </nav>
    );
  }