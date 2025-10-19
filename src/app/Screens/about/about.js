'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

export default function AboutSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const founderImageUrl = 'https://i.ibb.co/zVZCgbPN/founder.jpg';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight border-2 border-black px-3 py-1">
              MBR GROUP
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-900 hover:text-gray-600 font-medium border-b-2 border-black pb-1">About us</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#press" className="text-gray-700 hover:text-gray-900">Press</a>
              <a href="#partners" className="text-gray-700 hover:text-gray-900">Partners</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#about" className="text-gray-900 hover:text-gray-600 font-medium">About us</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#press" className="text-gray-700 hover:text-gray-900">Press</a>
              <a href="#partners" className="text-gray-700 hover:text-gray-900">Partners</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image with Icon */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 flex items-center justify-center">
                <div className="w-20 h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50, 50)">
                      {[...Array(16)].map((_, i) => (
                        <rect
                          key={i}
                          x="-3"
                          y="-45"
                          width="6"
                          height="25"
                          fill="black"
                          transform={`rotate(${i * 22.5})`}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative bg-gray-200 overflow-hidden">
                <img
                  src={founderImageUrl}
                  alt="Abdul Nasar Mubassir - Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
                ABOUT US
              </h1>
              
              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  MBR Group, founded in 2024 in Sri Lanka by Abdul Nasar Mubassir, is a rapidly expanding multinational conglomerate driven by innovation, intelligence, and sustainability. The founder, a Software Engineer and Artificial Intelligence Specialist, built the Group on the principle that technology and smart solutions can transform industries and communities for a better future.
                </p>
                
                <p>
                  From its inception, MBR Group has grown into a diverse collection of companies that operate across Technology, Energy, Agriculture, E-commerce, Tourism, Food & Beverages, Logistics, Vehicle Services, and Investment sectors. Each subsidiary plays a vital role in shaping the Group's mission to empower industries through smart, sustainable, and future-ready business models.
                </p>
                
                <p>
                  Guided by the vision and leadership of Abdul Nasar Mubassir, MBR Group continues to embody the spirit of innovation, sustainability, and excellence, proving that technology-driven ideas can inspire global transformation starting from Sri Lanka.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="pt-8">
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div className="bg-black h-2 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8">
          <a href="#" className="text-gray-700 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}