"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar({ logo, menuItems, menuDropdowns }) {
  // Stato per gestire il dropdown, il menu mobile e lo scroll
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Effetto per ascoltare lo scroll della pagina
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestisce l'apertura e la chiusura del dropdown
  const handleDropdownClick = (dropdownKey) => {
    setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
  };

  // Funzione per determinare se un link è attivo
  const isActive = (href, item) => {
    if (item.label === "Sostienici") {
      return false;
    }
    if (pathname === href) {
      return true;
    }
    if (href !== '/' && pathname.startsWith(href)) {
      return true;
    }
    if (item.dropdown) {
      const dropdownLinks = menuDropdowns[item.dropdownKey]?.links || [];
      return dropdownLinks.some(link => pathname === link.href);
    }
    return false;
  };

  // Renderizza la navbar
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-lg shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Menu principale (desktop) */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                // Elemento del menu a tendina
                <div key={index} className="relative">
                  <button
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-1 group ${
                      isActive(item.href, item)
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => handleDropdownClick(item.dropdownKey)}
                  >
                    <span>{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === item.dropdownKey ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {menuDropdowns[item.dropdownKey] && (
                    // Contenuto del menu a tendina
                    <div
                      className={`absolute top-full left-0 mt-2 w-[480px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                        openDropdown === item.dropdownKey
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            {menuDropdowns[item.dropdownKey].title && (
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {menuDropdowns[item.dropdownKey].title}
                              </h3>
                            )}
                            {menuDropdowns[item.dropdownKey].description && (
                              <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {Array.isArray(
                                  menuDropdowns[item.dropdownKey].description
                                )
                                  ? menuDropdowns[
                                      item.dropdownKey
                                    ].description.map((desc, idx) => (
                                      <p key={idx} className="mb-2">
                                        {desc}
                                      </p>
                                    ))
                                  : menuDropdowns[item.dropdownKey].description}
                              </div>
                            )}
                            <div className="space-y-2">
                              {menuDropdowns[item.dropdownKey].links &&
                                menuDropdowns[item.dropdownKey].links.map(
                                  (link, i) => (
                                    <a
                                      key={i}
                                      href={link.href}
                                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
                                        pathname === link.href
                                          ? "text-blue-700 bg-blue-50"
                                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                      }`}
                                    >
                                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                        pathname === link.href
                                          ? "bg-blue-700"
                                          : "bg-blue-400 group-hover:bg-blue-600"
                                      }`}></div>
                                      {link.label}
                                    </a>
                                  )
                                )}
                            </div>
                          </div>

                          {menuDropdowns[item.dropdownKey].right && (
                            <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                              {menuDropdowns[item.dropdownKey].right.title && (
                                <h4 className="text-base font-semibold text-gray-900 mb-3">
                                  {menuDropdowns[item.dropdownKey].right.title}
                                </h4>
                              )}
                              {menuDropdowns[item.dropdownKey].right.text && (
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                  {menuDropdowns[item.dropdownKey].right.text}
                                </p>
                              )}
                              <div className="space-y-2">
                                {menuDropdowns[item.dropdownKey].right.links &&
                                  menuDropdowns[
                                    item.dropdownKey
                                  ].right.links.map((link, idx) => (
                                    <a
                                      key={idx}
                                      href={link.href}
                                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
                                        pathname === link.href
                                          ? "text-blue-700 bg-blue-50"
                                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                      }`}
                                    >
                                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                        pathname === link.href
                                          ? "bg-blue-700"
                                          : "bg-blue-400 group-hover:bg-blue-600"
                                      }`}></div>
                                      {link.label}
                                    </a>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Elemento del menu semplice
                <a
                  key={index}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isActive(item.href, item)
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Bottone Regione Veneto (desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="http://www.regione.veneto.it/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Regione Veneto</span>
            </a>
          </div>

          {/* Bottone menu mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-screen bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Bottone chiusura menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  // Elemento dropdown nel menu mobile
                  <div key={index}>
                    <button
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full text-left ${
                        isActive(item.href, item)
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        handleDropdownClick(item.dropdownKey);
                      }}
                    >
                      {item.label}
                    </button>
                    {menuDropdowns[item.dropdownKey] && openDropdown === item.dropdownKey && (
                      <div className="ml-4 mt-2 space-y-2">
                        {menuDropdowns[item.dropdownKey].links &&
                          menuDropdowns[item.dropdownKey].links.map((link, i) => (
                            <a
                              key={i}
                              href={link.href}
                              className="block px-4 py-3 rounded-lg font-medium transition-all duration-200 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Elemento semplice nel menu mobile
                  <a
                    key={index}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.href, item)
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
            {/* Bottone regione veneto (mobile) */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="http://www.regione.veneto.it/"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Regione Veneto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
