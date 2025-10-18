'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const subsidiaries = [
    { name: 'Tokilo Technologies', subtitle: 'Technology Company' },
    { name: 'Athimart', subtitle: 'Ecommerce Digital Marketing' },
    { name: 'Goviceylon', subtitle: 'Agriculture Company' },
    { name: 'Agroherds', subtitle: 'Livestock Farming' },
    { name: 'Tidrox', subtitle: 'Sea Products Business' },
    { name: 'Eatzwee', subtitle: 'Food and Beverages' },
    { name: 'Pistano', subtitle: 'Vehicle Sector' },
    { name: 'Neonzer', subtitle: 'MBR FUEL STATION AND ENERGY SECTOR' },
    { name: 'Shipzem', subtitle: 'TRAVELS AND TRANSPORTATION Export and Import' },
    { name: 'Tripzem', subtitle: 'Tourism Business' },
    { name: 'Finexza', subtitle: 'MBR INVESTMENT BUSINESS - Always' }
  ];

  const heroSlides = [
    {
      type: 'video',
      video: 'https://www.pexels.com/download/video/3125427/',
      title: 'Tokilo Technologies',
      subtitle: 'Technology Company',
      description: 'Leading innovation in technology solutions, software development, and digital transformation.',
      category: '1'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
      title: 'Athimart',
      subtitle: 'Ecommerce Digital Marketing',
      description: 'Revolutionizing online commerce with smart digital marketing strategies and e-commerce solutions.',
      category: '2'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop',
      title: 'Goviceylon',
      subtitle: 'Agriculture Company',
      description: 'Sustainable farming practices and agricultural innovation for a better tomorrow.',
      category: '3'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&h=1080&fit=crop',
      title: 'Agroherds',
      subtitle: 'Livestock Farming',
      description: 'Advanced livestock management and sustainable animal farming solutions.',
      category: '4'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
      title: 'Tidrox',
      subtitle: 'Sea Products Business',
      description: 'Premium seafood products and sustainable marine resource management.',
      category: '5'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
      title: 'Eatzwee',
      subtitle: 'Food and Beverages',
      description: 'Quality food production and innovative beverage solutions for global markets.',
      category: '6'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop',
      title: 'Pistano',
      subtitle: 'Vehicle Sector',
      description: 'Automotive excellence and innovative vehicle solutions for modern transportation.',
      category: '7'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1920&h=1080&fit=crop',
      title: 'Neonzer',
      subtitle: 'MBR FUEL STATION AND ENERGY SECTOR',
      description: 'Clean energy solutions and modern fuel station services for sustainable future.',
      category: '8'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop',
      title: 'Shipzem',
      subtitle: 'TRAVELS AND TRANSPORTATION Export and Import',
      description: 'Global logistics, transportation, and international trade solutions.',
      category: '9'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop',
      title: 'Tripzem',
      subtitle: 'Tourism Business',
      description: 'Exceptional travel experiences and tourism services across the globe.',
      category: '10'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop',
      title: 'Finexza',
      subtitle: 'MBR INVESTMENT BUSINESS - Always',
      description: 'Strategic investment solutions and financial services for sustainable growth.',
      category: '11'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, currentSlide === 0 ? 6000 : 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Navigation Links */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <a href="#about" className="text-gray-700 hover:text-[#2d4c7b] transition-colors text-sm font-medium">
                About Us
              </a>
              
              {/* Subsidiaries Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#2d4c7b] transition-colors text-sm font-medium flex items-center gap-1">
                  Subsidiaries
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isSubMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {subsidiaries.map((sub, index) => (
                      <a
                        key={index}
                        href={`#${sub.name.toLowerCase()}`}
                        className="block px-4 py-2.5 hover:bg-gray-50 transition-all duration-200 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#2d4c7b]/10 flex items-center justify-center text-[#2d4c7b] font-bold text-xs group-hover:bg-[#2d4c7b] group-hover:text-white transition-all duration-200">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-900 font-semibold text-sm group-hover:text-[#2d4c7b] transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {sub.subtitle}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <a href="#services" className="text-gray-700 hover:text-[#2d4c7b] transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#2d4c7b] transition-colors text-sm font-medium">
                Portfolio
              </a>
            </div>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="https://i.ibb.co/HDckVL7S/mbrlogo.png" 
                alt="MBR Group Logo" 
                className="h-14 w-auto object-contain rounded-xl"
              />
            </div>

            {/* Right Side - Search Bar and Contact Button */}
            <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2d4c7b] focus:ring-2 focus:ring-[#2d4c7b]/20 transition-all"
                  onFocus={() => setIsSearchOpen(true)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <button className="bg-[#2d4c7b] hover:bg-[#234066] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900 z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col gap-3 px-6">
              <a href="#about" className="text-gray-700 hover:text-[#2d4c7b] transition-colors py-2 text-sm">
                About Us
              </a>
              <a href="#subsidiaries" className="text-gray-700 hover:text-[#2d4c7b] transition-colors py-2 text-sm">
                Subsidiaries
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#2d4c7b] transition-colors py-2 text-sm">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#2d4c7b] transition-colors py-2 text-sm">
                Portfolio
              </a>
              <button className="bg-[#2d4c7b] hover:bg-[#234066] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}

        {/* Modern Search Bar Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-24">
            <div className="w-full max-w-3xl mx-4">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for subsidiaries, services, or content..."
                    className="flex-1 outline-none text-lg text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                  <button 
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Quick Links */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Quick Links
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#tokilo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#2d4c7b]/10 flex items-center justify-center text-[#2d4c7b] font-bold group-hover:bg-[#2d4c7b] group-hover:text-white transition-colors">
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Tokilo Technologies</div>
                        <div className="text-xs text-gray-500">Technology Company</div>
                      </div>
                    </a>
                    <a href="#athimart" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#2d4c7b]/10 flex items-center justify-center text-[#2d4c7b] font-bold group-hover:bg-[#2d4c7b] group-hover:text-white transition-colors">
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Athimart</div>
                        <div className="text-xs text-gray-500">Ecommerce Digital Marketing</div>
                      </div>
                    </a>
                    <a href="#services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#2d4c7b]/10 flex items-center justify-center group-hover:bg-[#2d4c7b] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4c7b] group-hover:text-white">
                          <path d="M12 2v20M2 12h20"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">Our Services</div>
                        <div className="text-xs text-gray-500">Explore what we offer</div>
                      </div>
                    </a>
                    <a href="#about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-[#2d4c7b]/10 flex items-center justify-center group-hover:bg-[#2d4c7b] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2d4c7b] group-hover:text-white">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 16v-4M12 8h.01"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">About Us</div>
                        <div className="text-xs text-gray-500">Learn more about MBR</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Slideshow */}
      <div className="relative min-h-screen flex items-center pt-20">
        {/* Slideshow Background */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Video or Image */}
            {slide.type === 'video' ? (
              <>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={currentSlide === index ? 'playing' : 'paused'}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
                {/* Dark Overlay for Video */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </>
            ) : (
              <>
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`
                  }}
                />
                {/* Dark Overlay for Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </>
            )}
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <div className="mb-4">
                  <div className="text-[#2d4c7b] text-lg font-semibold">
                    {slide.subtitle}
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#2d4c7b] hover:bg-[#234066] px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
                    Learn More
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg font-semibold transition-colors">
                    View All
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#2d4c7b] w-12'
                  : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-20">
          <a href="#" className="text-white hover:text-[#2d4c7b] transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#2d4c7b] transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#2d4c7b] transition-colors">
            <Youtube size={24} />
          </a>
          <div className="w-px h-20 bg-white/30 mx-auto mt-4" />
        </div>

        {/* Chat Button - Bottom Right */}
        <button className="absolute bottom-8 right-8 bg-[#2d4c7b] hover:bg-[#234066] p-4 rounded-full shadow-lg transition-all hover:scale-110 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            1
          </span>
        </button>
      </div>

      {/* About Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About MBR Group</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
                alt="MBR Group"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                MBR Group is a diversified business conglomerate driven by innovation, excellence, and a vision to shape the future across multiple industries.
              </p>
              <p>
                With a strong presence in technology, agriculture, energy, logistics, food, and finance, MBR Group continues to redefine business standards through strategic investments, digital transformation, and sustainable growth.
              </p>
              <p>
                Founded with a mission to deliver impactful solutions across various sectors, MBR Group operates through its <strong>11 dynamic subsidiaries</strong>—each excelling in its respective domain.
              </p>
              <button className="mt-6 bg-[#2d4c7b] hover:bg-[#234066] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}