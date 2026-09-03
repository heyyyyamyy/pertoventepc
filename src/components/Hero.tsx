import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/offshore-platform.jpg",
      subtitle: "Welcome to PetroventEPC",
      quote: "Forging the future of global energy."
    },
    {
      image: "/images/offshore-wind.jpg",
      subtitle: "Excellence in Wind Construction",
      quote: "Harnessing the power of nature."
    },
    {
      image: "/images/industrial-power.jpg",
      subtitle: "Offshore Engineering Leaders",
      quote: "Building strength through deepwater innovation."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden bg-brand-dark">
      
      {/* Dynamic Background Slideshow with Zoom Effect */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 delay-1000'
          }`}
        >
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-[#011222]/85 z-10"></div>
          
          <img 
            src={slide.image} 
            alt={`Slide ${index + 1}`} 
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl animate-fade-in-up">
            
            {/* Dynamic Subtitle */}
            <div className="h-8 mb-6 overflow-hidden relative">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 flex items-center gap-2 transition-all duration-500 transform ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <ChevronRight className="text-brand-yellow" size={16} strokeWidth={4} />
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
                    {slide.subtitle}
                  </span>
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
              Engineering <br/>
              Energy <br/>
              Solutions
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed border-l-2 border-brand-yellow/30 pl-6">
              Premier international EPC contractor specializing in Petroleum, Wind Construction, Power Energy, and Offshore Projects across the UK and India.
            </p>

            {/* Dynamic Quote Section */}
            <div className="mb-10 min-h-[60px] relative">
              {slides.map((slide, index) => (
                <p 
                  key={index}
                  className={`text-brand-yellow font-heading italic text-xl transition-all duration-700 absolute top-0 left-0 ${
                    index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  "{slide.quote}"
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => navigate('/quote')}
                className="bg-brand-yellow text-brand-dark px-9 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="bg-transparent border border-gray-600 text-white px-9 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Content - Image Block with Stats */}
          <div className="relative hidden lg:block animate-fade-in-up delay-200">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="overflow-hidden rounded-sm shadow-2xl relative h-[500px] w-full group border border-white/5">
                <img 
                  src="/images/industrial-power.jpg" 
                  alt="Industrial Worker" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-60"></div>
              </div>
              
              {/* Stats Strip Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#011222] border-t border-white/10 p-8 transform translate-y-0 lg:translate-y-0">
                 <div className="grid grid-cols-3 divide-x divide-white/10">
                   <div className="text-center px-2">
                     <span className="block text-3xl font-heading font-bold text-brand-yellow mb-1">15+</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-medium">Years of Experience</span>
                   </div>
                   <div className="text-center px-2">
                     <span className="block text-3xl font-heading font-bold text-brand-yellow mb-1">99%</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-medium">Safety Record</span>
                   </div>
                   <div className="text-center px-2">
                     <span className="block text-3xl font-heading font-bold text-brand-yellow mb-1">100+</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-medium">Global Projects</span>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-white/5 rounded-sm"></div>
            <div className="absolute -z-10 bottom-[-40px] left-[-40px] w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
