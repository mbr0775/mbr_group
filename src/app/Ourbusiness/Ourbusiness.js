"use client";

import React, { useState, useEffect, useRef } from 'react';

const OurBusiness = () => {
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

  const categories = [
    {
      title: "Technology",
      subsidiary: "Tokilo Technologies",
      icon: "💻",
      delay: "0.1s"
    },
    {
      title: "E-commerce & Marketing",
      subsidiary: "Athimart",
      icon: "🛒",
      delay: "0.2s"
    },
    {
      title: "Agriculture",
      subsidiary: "Goviceylon",
      icon: "🌾",
      delay: "0.3s"
    },
    {
      title: "Livestock",
      subsidiary: "Agroherds",
      icon: "🐄",
      delay: "0.4s"
    },
    {
      title: "Seafood & Aquaculture",
      subsidiary: "Tidrox",
      icon: "🐟",
      delay: "0.5s"
    },
    {
      title: "Food & Beverage",
      subsidiary: "Eatzwee",
      icon: "🍽️",
      delay: "0.6s"
    },
    {
      title: "Vehicle Services",
      subsidiary: "Pistano",
      icon: "🚗",
      delay: "0.7s"
    },
    {
      title: "Energy & Fuel",
      subsidiary: "Neonzer",
      icon: "⚡",
      delay: "0.8s"
    },
    {
      title: "Logistics & Trade",
      subsidiary: "Shipzem",
      icon: "🚢",
      delay: "0.9s"
    },
    {
      title: "Tourism & Hospitality",
      subsidiary: "Tripzem",
      icon: "✈️",
      delay: "1s"
    },
    {
      title: "Investment & Finance",
      subsidiary: "Finexza",
      icon: "💰",
      delay: "1.1s"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1a2942]/10 text-[#1a2942] rounded-full text-sm font-semibold mb-4">
            Our Business
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Business <span className="text-[#1a2942]">Categories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            11 Subsidiaries Operating Across Multiple Industries
          </p>
        </div>

        {/* Categories Grid */}
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? category.delay : '0s'
              }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1a2942] transition-colors duration-300">
                {category.title}
              </h3>

              {/* Subsidiary Name */}
              <p className="text-[#1a2942] font-semibold text-lg">
                {category.subsidiary}
              </p>

              {/* Hover Line Effect */}
              <div className="mt-6 h-1 bg-gradient-to-r from-[#1a2942] to-[#2d4c7b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBusiness;