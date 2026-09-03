import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-on-scroll fade-right">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-yellow z-10"></div>
            <div className="relative overflow-hidden rounded-sm group">
              <img 
                src="/images/offshore-platform.jpg" 
                alt="Offshore Construction" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-yellow/10 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 right-0 md:-right-10 bg-brand-yellow text-brand-dark p-8 max-w-xs shadow-2xl hidden md:block animate-on-scroll zoom-in delay-300">
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-heading font-bold">
                  <Counter end={15} suffix="+" />
                </span>
                <span className="font-bold text-lg uppercase tracking-wide">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:pl-10 animate-on-scroll fade-left delay-200">
            <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
              <ChevronRight size={16} />
              <span>About PetroventEPC</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
              Global Leaders in <br/> EPC Solutions
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              PetroventEPC is a premier international Engineering, Procurement, and Construction (EPC) company. With dual headquarters in Kakinada, India, and Aberdeen, UK, we specialize in delivering complex infrastructural solutions across the Petroleum, Wind Construction, Power Energy, and Offshore sectors globally.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Petroleum & Refinery Construction",
                "Offshore Platforms & Subsea Engineering",
                "Wind Farm Development & Installation",
                "Global Project Management & Delivery"
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 animate-on-scroll fade-up delay-${(i + 1) * 100}`}>
                  <CheckCircle className="text-brand-yellow flex-shrink-0" size={20} />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-transparent border border-brand-yellow text-brand-yellow px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Stats Strip */}
      <div className="container mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
              { value: 15, suffix: "+", label: "Years of Experience" },
              { value: 50, suffix: "+", label: "Global Clients" },
              { value: 120, suffix: "+", label: "Completed Projects" },
              { value: 2000, suffix: "+", label: "Global Workforce" },
            ].map((stat, i) => (
              <div key={i} className={`text-center md:text-left animate-on-scroll fade-up delay-${i * 100}`}>
                <h4 className="text-4xl font-heading font-bold text-brand-yellow mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-gray-400 uppercase text-sm tracking-wider">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
