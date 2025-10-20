"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HomeSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 0,
      type: 'video',
      title: "Welcome to MBR Group",
      subtitle: "Leading Innovation Across Industries",
      description: "Transforming businesses through technology, agriculture, and sustainable solutions",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      bgColor: "from-blue-600 to-purple-600"
    },
    {
      id: 1,
      type: 'image',
      title: "Tokilo Technologies",
      subtitle: "Technology & Digital Solutions",
      description: "Cutting-edge digital platforms and innovative technology solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      bgColor: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      type: 'image',
      title: "Athimart",
      subtitle: "E-Commerce Platform",
      description: "Your destination for quality products and seamless shopping experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      type: 'image',
      title: "Goviceylon",
      subtitle: "Agriculture & Livestock",
      description: "Premium agricultural products and sustainable livestock solutions",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=600&fit=crop",
      bgColor: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      type: 'image',
      title: "Agroherds",
      subtitle: "Modern Farming Solutions",
      description: "Innovative agricultural technology for sustainable farming",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop",
      bgColor: "from-lime-600 to-green-600"
    },
    {
      id: 5,
      type: 'image',
      title: "Tidrox",
      subtitle: "Seafood Excellence",
      description: "Fresh, sustainable seafood delivered from ocean to table",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
      bgColor: "from-blue-600 to-teal-600"
    },
    {
      id: 6,
      type: 'image',
      title: "Eatzwee",
      subtitle: "Food & Dining",
      description: "Delicious culinary experiences and quality food services",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
      bgColor: "from-orange-600 to-red-600"
    },
    {
      id: 7,
      type: 'image',
      title: "Pistano",
      subtitle: "Vehicle Solutions",
      description: "Quality vehicles and automotive services for every need",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop",
      bgColor: "from-gray-700 to-gray-900"
    },
    {
      id: 8,
      type: 'image',
      title: "Shipzem",
      subtitle: "Transport & Logistics",
      description: "Global shipping and logistics solutions you can trust",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
      bgColor: "from-indigo-600 to-blue-600"
    },
    {
      id: 9,
      type: 'image',
      title: "Neonzer",
      subtitle: "Energy & Power",
      description: "Sustainable energy solutions for a brighter future",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
      bgColor: "from-yellow-500 to-orange-600"
    },
    {
      id: 10,
      type: 'image',
      title: "Tripzem",
      subtitle: "Tourism & Travel",
      description: "Discover amazing destinations and unforgettable experiences",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop",
      bgColor: "from-sky-600 to-blue-600"
    },
    {
      id: 11,
      type: 'image',
      title: "Finexza",
      subtitle: "Investment & Finance",
      description: "Smart financial solutions and investment opportunities",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop",
      bgColor: "from-emerald-600 to-teal-600"
    }
  ];

  // Main auto-advance logic
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set duration based on slide type
    const duration = currentSlide === 0 ? 6000 : 3000;

    // Set timer for next slide
    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, slides.length]);

  // Reset video when coming back to first slide
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    }
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Video Slide */}
          {slide.type === 'video' && (
            <div className="absolute inset-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              >
                <source src={slide.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Video Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-40`}></div>
            </div>
          )}

          {/* Image Slide */}
          {slide.type === 'image' && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-75`}></div>
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 mb-6 animate-fade-in-delay-1">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-delay-2">
                  {slide.description}
                </p>
                <div className="flex gap-4 animate-fade-in-delay-3">
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={goToPrevious}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
        }
      `}</style>
    </div>
  );
};

export default HomeSlideshow;