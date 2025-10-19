"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Brain, Cpu, Leaf, Zap, Lightbulb, Rocket, Globe, ShoppingCart, Sprout, Fish, Utensils, Car, Ship, Plane, DollarSign } from 'lucide-react';

const InnovationPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
      });
    }, { threshold: 0.1 });
    Object.values(sectionsRef.current).forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const subsidiaries = [
    { icon: Cpu, name: "Tokilo Technologies", innovation: "AI-powered digital platforms and automation solutions.", gradient: "from-blue-500 to-cyan-500" },
    { icon: ShoppingCart, name: "Athimart", innovation: "Smart e-commerce with personalized shopping experiences.", gradient: "from-purple-500 to-pink-500" },
    { icon: Sprout, name: "Goviceylon", innovation: "Precision agriculture using IoT sensors and analytics.", gradient: "from-green-500 to-emerald-500" },
    { icon: Leaf, name: "Agroherds", innovation: "AI-driven livestock monitoring and health analytics.", gradient: "from-lime-500 to-green-500" },
    { icon: Fish, name: "Tidrox", innovation: "Sustainable seafood tracking and traceability.", gradient: "from-blue-600 to-teal-500" },
    { icon: Utensils, name: "Eatzwee", innovation: "Smart kitchen automation and menu optimization.", gradient: "from-orange-500 to-red-500" },
    { icon: Car, name: "Pistano", innovation: "Connected vehicle technology and diagnostics.", gradient: "from-gray-600 to-gray-800" },
    { icon: Ship, name: "Shipzem", innovation: "Smart logistics with AI route optimization.", gradient: "from-indigo-500 to-blue-600" },
    { icon: Zap, name: "Neonzer", innovation: "Renewable energy and smart grid technology.", gradient: "from-yellow-500 to-orange-500" },
    { icon: Plane, name: "Tripzem", innovation: "AI-powered travel planning and booking.", gradient: "from-sky-500 to-blue-500" },
    { icon: DollarSign, name: "Finexza", innovation: "Fintech solutions and investment analysis.", gradient: "from-emerald-500 to-teal-500" }
  ];

  const coreInnovations = [
    { icon: Brain, title: "Artificial Intelligence", description: "AI and machine learning driving smart decisions", gradient: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Digital Transformation", description: "Cloud systems and IoT for seamless operations", gradient: "from-blue-500 to-cyan-500" },
    { icon: Leaf, title: "Sustainability", description: "Green technology in every business vertical", gradient: "from-green-500 to-emerald-500" },
    { icon: Lightbulb, title: "Smart Solutions", description: "Intelligent automation enhancing productivity", gradient: "from-yellow-500 to-orange-500" }
  ];

  const achievements = [
    { number: "11", label: "Innovative Subsidiaries" },
    { number: "100+", label: "AI Solutions Deployed" },
    { number: "24/7", label: "Smart Monitoring" },
    { number: "Global", label: "Technology Reach" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2d4c7b] via-[#1a2940] to-[#2d4c7b] text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Rocket className="w-4 h-4" />
              Innovation Hub
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Innovation at MBR Group</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">Pioneering the future with technology and sustainable solutions</p>
          </div>
        </div>
      </section>

      <section id="core" ref={(el) => (sectionsRef.current.core = el)} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.core ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Innovation <span className="text-[#2d4c7b]">Pillars</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Core technologies driving innovation across all our subsidiaries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreInnovations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible.core ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="subsidiaries" ref={(el) => (sectionsRef.current.subsidiaries = el)} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.subsidiaries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Innovation Across <span className="text-[#2d4c7b]">All Businesses</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Each subsidiary leverages cutting-edge technology to revolutionize their industry</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((company, index) => {
              const Icon = company.icon;
              return (
                <div key={index} className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${isVisible.subsidiaries ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${company.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${company.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{company.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{company.innovation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="achievements" ref={(el) => (sectionsRef.current.achievements = el)} className="py-20 bg-gradient-to-br from-[#2d4c7b] to-[#1a2940] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Innovation By Numbers</h2>
            <p className="text-xl text-blue-100">Measurable impact through technology</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`text-center group transition-all duration-1000 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{achievement.number}</p>
                  <p className="text-blue-100 font-medium">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" ref={(el) => (sectionsRef.current.vision = el)} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Globe className="w-16 h-16 mx-auto mb-6 text-[#2d4c7b]" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Innovation <span className="text-[#2d4c7b]">Vision</span></h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">Creating intelligent, sustainable solutions that transform businesses and improve lives globally through innovation that makes a difference.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#2d4c7b] to-[#1a2940] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">Join Our Innovation Journey</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationPage;