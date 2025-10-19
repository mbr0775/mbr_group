"use client";

import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20" style={{ fontFamily: 'var(--font-coco-gothic)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Side - Founder Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2d4c7b] to-[#1a2940] animate-pulse"></div>
              
              {/* Second Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#2d4c7b]/30 to-[#1a2940]/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full">
                  <img
                    src="/mubassir.png"
                    alt="Abdul Nasar Mubassir - Founder"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2d4c7b] to-[#1a2940] px-8 py-4 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <p className="text-white font-bold text-base">Founder</p>
                  <p className="text-white/80 font-medium text-sm my-0.5">&</p>
                  <p className="text-white font-bold text-base">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#2d4c7b]/10 text-[#2d4c7b] rounded-full text-sm font-semibold mb-2 animate-fade-in">
              About MBR Group
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-delay-1">
              Building the <span className="text-[#2d4c7b]">Future</span>
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed animate-fade-in-delay-2">
              <p>
                MBR Group, founded in <span className="text-[#2d4c7b]">2024</span> by <span className="font-semibold text-[#2d4c7b]">Abdul Nasar Mubassir</span> in Sri Lanka, is a growing multinational company built on technology, innovation, and sustainability.
              </p>
              
              <p>
                Mubassir, a Software Engineer and AI Specialist, leads the Group with a vision to create smart and sustainable solutions for the future.
              </p>
              
              <p>
                The Group operates through several subsidiaries, including <span className="font-medium text-[#2d4c7b]">Tokilo Technologies, Athimart, Goviceylon, Agroherds, Tidrox, Eatzwee, Pistano, Neonzer, Shipzem, Tripzem, and Finexza</span> — covering sectors like technology, agriculture, food, tourism, vehicles, energy, and investment.
              </p>
              
              <p className="font-medium text-gray-900">
                Driven by innovation and integrity, MBR Group continues to expand globally, delivering intelligent solutions that empower industries and communities worldwide.
              </p>
            </div>

            <div className="flex gap-4 pt-6 animate-fade-in-delay-3">
              <button className="px-8 py-3 bg-[#2d4c7b] text-white rounded-lg font-semibold hover:bg-[#1a2940] transition-colors shadow-lg transform hover:scale-105 duration-300">
                Learn More
              </button>
              <button className="px-8 py-3 bg-[#2d4c7b] text-white rounded-lg font-semibold hover:bg-[#1a2940] transition-colors shadow-lg transform hover:scale-105 duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.8s ease-out 0.6s both;
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;