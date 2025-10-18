'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ServicesCategories() {
  const [visibleSections, setVisibleSections] = useState({});
  const [visibleCards, setVisibleCards] = useState({});
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setVisibleSections((prev) => ({
                ...prev,
                [index]: entry.isIntersecting
              }));
            });
          },
          { threshold: 0.15, rootMargin: '0px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setVisibleCards((prev) => ({
                ...prev,
                [index]: entry.isIntersecting
              }));
            });
          },
          { threshold: 0.2, rootMargin: '0px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const businesses = [
    {
      id: 1,
      name: 'Tokilo Technologies',
      category: 'Tech-Driven Solutions',
      mainTitle: 'Digital Transformation',
      description: 'We provide cutting-edge technology solutions that drive digital transformation, enhance operational efficiency, and create sustainable value for businesses across various industries, always delivering excellence.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      imagePosition: 'right',
      bgColor: 'bg-white'
    },
    {
      id: 2,
      name: 'Athimart',
      category: 'Digital Commerce',
      mainTitle: 'E-Commerce Excellence',
      description: 'E-commerce and digital marketing expertise, boosting online presence, driving sales, and maximizing ROI for clients through innovative strategies and cutting-edge solutions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      imagePosition: 'left',
      bgColor: 'bg-gray-50'
    },
    {
      id: 3,
      name: 'Goviceylon',
      category: 'Sustainable Farming',
      mainTitle: 'Eco Agriculture',
      description: 'We champion sustainable agriculture practices that promote food security, empower local farmers, and ensure environmental stewardship for future generations, fostering a healthier planet, always delivering excellence.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop',
      imagePosition: 'right',
      bgColor: 'bg-white'
    },
    {
      id: 4,
      name: 'Agroherds',
      category: 'Modern Livestock',
      mainTitle: 'Sustainable Livestock',
      description: 'Advanced livestock farming solutions, sustainable animal husbandry, quality meat production, and modern farming technologies for global markets, ensuring ethical practices.',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=800&fit=crop',
      imagePosition: 'left',
      bgColor: 'bg-gray-50'
    },
    {
      id: 5,
      name: 'Tidrox',
      category: 'Marine Resources',
      mainTitle: 'Ocean Harvest',
      description: 'Premium seafood products, sustainable fishing practices, marine resource management, and quality sea products for international markets with environmental responsibility.',
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1200&h=800&fit=crop',
      imagePosition: 'right',
      bgColor: 'bg-white'
    },
    {
      id: 6,
      name: 'Eatzwee',
      category: 'Culinary Innovation',
      mainTitle: 'Food & Beverage',
      description: 'Quality food production, innovative beverage solutions, culinary excellence, and premium dining experiences for global consumers with exceptional taste.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
      imagePosition: 'left',
      bgColor: 'bg-gray-50'
    },
    {
      id: 7,
      name: 'Pistano',
      category: 'Modern Mobility',
      mainTitle: 'Automotive Innovation',
      description: 'Automotive excellence, innovative vehicle solutions, modern transportation services, and cutting-edge mobility technology for the future of transport.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
      imagePosition: 'right',
      bgColor: 'bg-white'
    }
  ];

  const showcaseCards = [
    {
      id: 'neonzer',
      name: 'Neonzer',
      category: 'Fueling Growth',
      mainTitle: 'Energy Sector',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop',
      darkOverlay: true
    },
    {
      id: 'tripzem',
      name: 'Tripzem',
      category: 'Tourism Reimagined',
      mainTitle: 'Travel Business',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop',
      darkOverlay: false
    }
  ];

  const gridCards = [
    {
      id: 'neonzer-grid',
      name: 'Neonzer',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop'
    },
    {
      id: 'shipzem',
      name: 'Shipzem',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    },
    {
      id: 'tripzem-grid',
      name: 'Tripzem',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d4c7b] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#2d4c7b]/10 rounded-full">
            <p className="text-[#2d4c7b] text-sm font-semibold tracking-wide uppercase">Our Core Strength</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-[#2d4c7b] bg-clip-text text-transparent">
                  Subsidiary
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#2d4c7b] to-blue-600 bg-clip-text text-transparent">
                  Business
                </span>
                <br />
                <span className="text-gray-900">Excellence</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#2d4c7b] to-blue-400 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Explore our diverse subsidiaries, each a leader in its respective industry, driving innovation, and delivering exceptional value to our clients and stakeholders, globally.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">11+ Subsidiaries</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">Global Presence</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories */}
      {businesses.map((business, index) => (
        <section
          key={business.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`py-12 px-6 ${business.bgColor} overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-10 items-center ${
                business.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-4 ${
                  business.imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
                } transition-all duration-1000 ease-out ${
                  visibleSections[index]
                    ? 'opacity-100 translate-x-0'
                    : business.imagePosition === 'left'
                    ? 'opacity-0 translate-x-20'
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-base text-gray-600">
                  {business.category}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {business.mainTitle}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {business.description}
                </p>
                <div className="flex gap-4 pt-2">
                  <button className="bg-[#2d4c7b] hover:bg-[#234066] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    {business.id === 3 ? 'Learn More' : 'Explore Now'}
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  business.imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
                } transition-all duration-1000 ease-out ${
                  visibleSections[index]
                    ? 'opacity-100 translate-x-0 scale-100'
                    : business.imagePosition === 'left'
                    ? 'opacity-0 -translate-x-20 scale-95'
                    : 'opacity-0 translate-x-20 scale-95'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Showcase Cards Section - Neonzer & Tripzem */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {showcaseCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  card.darkOverlay 
                    ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                    : 'bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent'
                }`} />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm mb-2 opacity-90">{card.category}</p>
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    {card.name}:<br/>{card.mainTitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Cards Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-[#2d4c7b]/10 rounded-full">
              <p className="text-[#2d4c7b] text-sm font-semibold tracking-wide uppercase">Our Portfolio</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-[#2d4c7b] bg-clip-text text-transparent">
                More Subsidiaries
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover additional businesses in our diverse portfolio, each contributing to our mission of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gridCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index + 2] = el)}
                className={`relative h-80 rounded-2xl overflow-hidden shadow-xl group transition-all duration-1000 ${
                  visibleCards[index + 2] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold">{card.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finexza Investment Section */}
      <section className="py-12 px-6 bg-[#2d4c7b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-gray-200 text-base">Strategic Investments</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Growth Investments
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed">
                We offer strategic investment solutions that drive business growth, maximize returns, and create long-term value for our clients, ensuring financial success, always delivering excellence.
              </p>
              <div className="pt-2">
                <button className="bg-white text-[#2d4c7b] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Invest Now
                </button>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop"
                alt="Finexza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#2d4c7b] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with MBR Group?
          </h2>
          <p className="text-xl mb-8">
            Join us in building tomorrow's success today. Connect with any of our subsidiaries to explore opportunities.
          </p>
          <button className="bg-white text-[#2d4c7b] hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}