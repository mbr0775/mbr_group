import React from 'react';
import Image from 'next/image';

const OurBusiness = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Business Overview Section */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#264169]">Our Businesses</h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Explore our diverse portfolio of innovative businesses spanning across multiple industries, 
          each committed to excellence and delivering exceptional value.
        </p>
      </div>

      {/* Technology & Digital - Tokilo Technologies */}
      <section id="tokilo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Tech-Driven Solutions
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Tokilo Technologies</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide cutting-edge technology solutions that drive digital transformation, 
                enhance operational efficiency, and create sustainable value for businesses across 
                various industries, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                  alt="Digital Transformation"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology & Digital - Athimart */}
      <section id="athimart" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                  alt="E-commerce Platform"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                E-Commerce Excellence
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Athimart</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your premier e-commerce destination offering a seamless online shopping experience. 
                Athimart connects customers with quality products through an innovative digital marketplace 
                that prioritizes convenience, reliability, and customer satisfaction, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* Tourism & Travel - Fixthan */}
      <section id="fixthan" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" 
                  alt="Travel and Tourism"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Travel Excellence
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Fixthan</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Your gateway to reliable home maintenance solutions. Fixthan offers comprehensive service bookings 
                  including carpentry, plumbing, and masonry work, connecting skilled professionals with homeowners 
                  seamlessly, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Agriculture & Livestock - Agrozin */}
      <section id="agrozin" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Sustainable Farming
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Agrozin</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We champion sustainable agriculture practices that promote food security, empower local farmers, 
                and ensure environmental stewardship for future generations, fostering a healthier planet, 
                always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" 
                  alt="Sustainable Farming"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Agriculture & Livestock - Agroherds */}
      <section id="agroherds" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80" 
                  alt="Livestock Management"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Modern Livestock
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Agroherds</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Revolutionizing livestock management with technology-driven solutions. Agroherds provides 
                comprehensive services for livestock farming, including health management, breeding programs, 
                and supply chain optimization, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seafood & Food - Tidrox */}
      <section id="tidrox" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Premium Seafood
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Tidrox</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Premium seafood sourcing and distribution. Tidrox brings the finest quality seafood from 
                ocean to table, maintaining strict quality controls and sustainable fishing practices to 
                deliver fresh, healthy seafood products, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80" 
                  alt="Fresh Seafood"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seafood & Food - Eatzwee */}
      <section id="eatzwee" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" 
                  alt="Healthy Food"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Healthy Living
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Eatzwee</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Innovative food solutions for modern lifestyles. Eatzwee offers a diverse range of 
                high-quality food products and services, from ready-to-eat meals to specialty ingredients, 
                all designed with health and convenience in mind, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicle & Transport - Pistano */}
      <section id="pistano" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Automotive Excellence
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Pistano</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Comprehensive automotive solutions and services. Pistano provides vehicle sales, maintenance, 
                and after-sales support, ensuring customers receive reliable transportation solutions with 
                exceptional service quality, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" 
                  alt="Automotive Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicle & Transport - Shipzem */}
      <section id="shipzem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80" 
                  alt="Logistics and Shipping"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Smart Logistics
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Shipzem</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Efficient logistics and shipping solutions. Shipzem specializes in freight forwarding, 
                cargo management, and end-to-end logistics services, ensuring timely and secure delivery 
                of goods across multiple destinations, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Energy & Power - Neonzer */}
      <section id="neonzer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Green Energy
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Neonzer</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Leading renewable energy solutions provider. Neonzer is committed to sustainable power 
                generation through solar, wind, and other renewable sources, helping businesses and 
                communities transition to clean energy alternatives, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
                  alt="Renewable Energy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* Tourism & Travel - Genexza */}
      <section id="genexza" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" 
                  alt="Travel and Tourism"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Travel Excellence
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Genexza</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Revolutionizing urban mobility for modern commuters. Genexza provides integrated travel and public transport 
                services with seamless ticket booking, live bus tracking, route suggestions, and multi-modal journey planning.
                Download our mobile app today for hassle-free commuting and smart travel solutions.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>





      
      {/* Tourism & Travel - Tripzem */}
      <section id="tripzem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" 
                  alt="Travel and Tourism"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Travel Excellence
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Tripzem</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your gateway to unforgettable travel experiences. Tripzem offers comprehensive travel 
                services including tour packages, hotel bookings, and destination management, creating 
                memorable journeys for travelers worldwide, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investment & Finance - Finexza */}
      <section id="finexza" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Financial Growth
              </p>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Finexza</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Strategic financial services and investment solutions. Finexza provides expert financial 
                advice, wealth management, and investment opportunities, helping clients achieve their 
                financial goals through informed decision-making and strategic planning, always delivering excellence.
              </p>
              <button className="px-8 py-4 bg-[#264169] text-white rounded-full font-semibold hover:bg-[#1e3351] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                  alt="Financial Services"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusiness;