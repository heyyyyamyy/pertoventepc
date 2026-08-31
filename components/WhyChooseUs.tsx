import React from 'react';
import { ChevronRight, ShieldCheck, Cpu, ClipboardCheck, Factory } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Why Choose Us</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase">
          The Strength Behind <br/> Global Energy
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Feature */}
        <div className="text-right space-y-12">
           <div className="group animate-on-scroll fade-right delay-100">
             <div className="flex items-center justify-end gap-4 mb-3">
               <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Global Compliant</h3>
               <ShieldCheck className="text-brand-yellow" size={32} />
             </div>
             <p className="text-gray-400 text-sm">Rigorous adherence to international offshore and onshore manufacturing standards.</p>
           </div>
           
           <div className="group animate-on-scroll fade-right delay-300">
             <div className="flex items-center justify-end gap-4 mb-3">
               <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Precision Engineering</h3>
               <Cpu className="text-brand-yellow" size={32} />
             </div>
             <p className="text-gray-400 text-sm">Utilizing cutting-edge structural simulation and technologies for perfect fabrication.</p>
           </div>
        </div>

        {/* Center Image */}
        <div className="h-[500px] relative overflow-hidden rounded-sm border border-white/10 group animate-on-scroll zoom-in delay-200">
          <img 
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1932&auto=format&fit=crop" 
            alt="Offshore Worker" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
          
          {/* Play Button Simulation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 hover:scale-110">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 hover:border-l-brand-dark"></div>
          </div>
        </div>

        {/* Right Feature */}
        <div className="text-left space-y-12">
           <div className="group animate-on-scroll fade-left delay-100">
             <div className="flex items-center justify-start gap-4 mb-3">
               <ClipboardCheck className="text-brand-yellow" size={32} />
               <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Quality Control</h3>
             </div>
             <p className="text-gray-400 text-sm">Comprehensive in-house testing facilities including deepwater integrity inspection.</p>
           </div>
           
           <div className="group animate-on-scroll fade-left delay-300">
             <div className="flex items-center justify-start gap-4 mb-3">
               <Factory className="text-brand-yellow" size={32} />
               <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-brand-yellow transition-colors">Sustainable Practice</h3>
             </div>
             <p className="text-gray-400 text-sm">Committed to eco-friendly construction and maximizing renewable energy capture.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
