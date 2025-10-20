"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X, User, Search } from 'lucide-react';
import { Inter } from 'next/font/google';
import mbrlogo from '../../../public/mbrlogo.png';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      href: '#home',
    },
    {
      id: 'about',
      label: 'About Us',
      href: '#about',
    },
    {
      id: 'businesses',
      label: 'Our Businesses',
      href: '#businesses',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Technology & Digital',
          items: [
            { name: 'Tokilo Technologies', href: '#tokilo' },
            { name: 'Athimart', href: '#athimart' },
          ],
        },
        {
          category: 'Agriculture & Livestock',
          items: [
            { name: 'Goviceylon', href: '#goviceylon' },
            { name: 'Agroherds', href: '#agroherds' },
          ],
        },
        {
          category: 'Seafood & Food',
          items: [
            { name: 'Tidrox', href: '#tidrox' },
            { name: 'Eatzwee', href: '#eatzwee' },
          ],
        },
        {
          category: 'Vehicle & Transport',
          items: [
            { name: 'Pistano', href: '#pistano' },
            { name: 'Shipzem', href: '#shipzem' },
          ],
        },
        {
          category: 'Energy & Power',
          items: [
            { name: 'Neonzer', href: '#neonzer' },
          ],
        },
        {
          category: 'Tourism & Travel',
          items: [
            { name: 'Tripzem', href: '#tripzem' },
          ],
        },
        {
          category: 'Investment & Finance',
          items: [
            { name: 'Finexza', href: '#finexza' },
          ],
        },
      ],
    },
    {
      id: 'innovation',
      label: 'Innovation',
      href: '#innovation',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    },
  ];

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = 80; // Height of sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${inter.className} bg-white shadow-sm sticky top-0 z-50`}>
      {/* Desktop Navigation */}
      <div className="hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 cursor-pointer">
            {/* Left Side - Navigation Items */}
            <div className="flex items-center space-x-8 transform -translate-x-[90px]">
              {navigationItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.hasDropdown ? (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#2d4c7b] font-medium transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="flex items-center gap-2 text-gray-700 hover:text-[#2d4c7b] font-medium transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                      </a>
                    )}

                    {/* Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === item.id && (
                      <div className="absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 max-h-96 overflow-y-auto">
                        <div className="grid grid-cols-1 gap-1 px-2">
                          {item.dropdownItems.map((category, idx) => (
                            <div key={idx} className="py-2">
                              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {category.category}
                              </div>
                              {category.items.map((subItem, subIdx) => (
                                <a
                                  key={subIdx}
                                  href={subItem.href}
                                  onClick={(e) => {
                                    handleSmoothScroll(e, subItem.href);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-4 py-2 text-gray-700 hover:bg-[#2d4c7b]/10 hover:text-[#2d4c7b] rounded-lg transition-colors duration-150"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-[-90px]">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="flex items-center justify-center"
              >
                <Image 
                  src={mbrlogo} 
                  alt="MBR Group Logo" 
                  width={80} 
                  height={80}
                  className="object-contain hover:opacity-90 transition-opacity duration-200"
                />
              </a>
            </div>

            {/* Right Side - Search Icon, Contact Button, User Icon */}
            <div className="flex items-center space-x-4 transform -translate-x-[-95px]">
              {/* Search Icon */}
              <button 
                onClick={() => setDesktopSearchOpen(!desktopSearchOpen)}
                className="p-2 text-gray-700 hover:text-[#2d4c7b] hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="px-6 py-2 bg-[#2d4c7b] text-white rounded-lg font-medium hover:bg-[#243d63] transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Contact
              </a>

              {/* User Icon */}
              <button className="p-2 text-gray-700 hover:text-[#2d4c7b] hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop Search Bar */}
          {desktopSearchOpen && (
            <div className="py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4c7b] focus:border-transparent transition-all duration-200 text-gray-900"
                />
                <Search className="w-5 h-5 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="border-b border-gray-200">
          <div className="px-4 h-16 flex items-center justify-between">
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center"
            >
              <Image 
                src={mbrlogo} 
                alt="MBR Group Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="px-4 py-2 bg-white border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4c7b] focus:border-transparent transition-all duration-200 text-gray-900"
              />
              <Search className="w-5 h-5 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Mobile Menu Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-full bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="py-3">
              {navigationItems.map((item) => {
                return (
                  <div key={item.id} className="px-2 py-0.5">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="flex items-center justify-between w-full px-3 py-2.5 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {mobileDropdownOpen && (
                          <div className="mt-1 ml-2 space-y-0.5">
                            {item.dropdownItems.map((category, idx) => (
                              <div key={idx} className="py-1">
                                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">
                                  {category.category}
                                </div>
                                {category.items.map((subItem, subIdx) => (
                                  <a
                                    key={subIdx}
                                    href={subItem.href}
                                    onClick={(e) => {
                                      handleSmoothScroll(e, subItem.href);
                                      setMobileMenuOpen(false);
                                      setMobileDropdownOpen(false);
                                    }}
                                    className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-[#2d4c7b]/10 hover:text-[#2d4c7b] rounded-lg transition-colors"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href);
                          setMobileMenuOpen(false);
                        }}
                        className="block px-3 py-2.5 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                      >
                        <span className="font-medium">{item.label}</span>
                      </a>  
                    )}
                  </div>
                );
              })}
              
              {/* Mobile Search, Contact and User */}
              <div className="px-2 py-1 mt-3 space-y-2">
                <div className="relative px-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4c7b] focus:border-transparent"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2" />
                </div>
                
                <div className="px-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      handleSmoothScroll(e, '#contact');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full px-3 py-2.5 bg-[#2d4c7b] text-white text-center rounded-lg font-medium hover:bg-[#243d63] transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="px-2">
                  <button 
                    className="flex items-center gap-2 w-full px-3 py-2.5 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;