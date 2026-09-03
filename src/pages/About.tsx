import React from 'react';
import { ChevronRight, Award, Shield, Scale, TrendingUp, Target, FileCheck, Building } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import Team from '../components/Team';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/offshore-platform.jpg" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-20 animate-on-scroll zoom-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-on-scroll fade-up">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Our <span className="text-brand-yellow">Story</span>
          </h1>
        </div>
      </section>

      {/* Main About Content from Component */}
      <AboutSection />

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-gray border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-dark border border-white/5 p-10 hover:border-brand-yellow/50 transition-all group relative overflow-hidden animate-on-scroll fade-up delay-200">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
               </div>
               <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mb-6">
                 <Target size={32} />
               </div>
               <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">Our Mission</h3>
               <p className="text-gray-400 leading-relaxed relative z-10">
                 To engineer, construct, and deliver the world’s most complex energy infrastructure projects safely, efficiently, and sustainably. We empower communities and drive global progress through innovative offshore and renewable energy solutions.
               </p>
            </div>
            
             <div className="bg-brand-dark border border-white/5 p-10 hover:border-brand-yellow/50 transition-all group relative overflow-hidden animate-on-scroll fade-up delay-300">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <TrendingUp size={120} />
               </div>
               <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mb-6">
                 <TrendingUp size={32} />
               </div>
               <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">Our Vision</h3>
               <p className="text-gray-400 leading-relaxed relative z-10">
                 To be the global benchmark in EPC services, recognized for pioneering the transition towards sustainable energy infrastructure while maintaining uncompromised excellence in offshore and petroleum engineering.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality, Safety, Ethics */}
      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-100">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Quality</h3>
               <p className="text-gray-400">
                  Strict adherence to ISO and international maritime standards. Every structure undergoes rigorous testing to ensure durability under extreme environments.
               </p>
            </div>
            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-200">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Safety</h3>
               <p className="text-gray-400">
                  Zero-compromise safety policy. We prioritize the well-being of our workforce, especially in hazardous offshore and high-altitude wind environments.
               </p>
            </div>
            <div className="bg-brand-gray p-10 border border-white/5 hover:border-brand-yellow transition-all duration-300 group text-center animate-on-scroll fade-up delay-300">
               <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Scale size={40} />
               </div>
               <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase">Business Ethics</h3>
               <p className="text-gray-400">
                  We operate with complete transparency, integrity, and accountability in all our international deployments.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Management */}
      <Team />

    </div>
  );
};

export default About;
