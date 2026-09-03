import React from 'react';
import { ArrowUpRight, Wind, Zap, Anchor, HardHat, Factory, Droplets } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Droplets size={40} />,
      title: "Petroleum Projects",
      desc: "Comprehensive EPC services for oil refineries, petrochemical plants, and pipeline networks."
    },
    {
      icon: <Wind size={40} />,
      title: "Wind Construction",
      desc: "Specialized in offshore and onshore wind farm development, turbine erection, and substation build."
    },
    {
      icon: <Zap size={40} />,
      title: "Power Energy",
      desc: "Delivering thermal, nuclear, and hydroelectric power generation plants with high efficiency."
    },
    {
      icon: <Anchor size={40} />,
      title: "Offshore Projects",
      desc: "Expertise in deepwater platforms, FPSO conversions, and subsea infrastructure installations."
    },
    {
      icon: <HardHat size={40} />,
      title: "Civil Infrastructure",
      desc: "Large-scale civil engineering for ports, bridges, heavy equipment foundries, and highways."
    },
    {
      icon: <Factory size={40} />,
      title: "Industrial Manufacturing",
      desc: "Design and construction of complex manufacturing facilities, assembly lines, and smelting plants."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray skew-x-[-10deg] transform origin-top hidden lg:block border-l border-white/5 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll fade-up">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6 leading-tight">
              Our Core <span className="text-brand-yellow">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              PetroventEPC delivers world-class engineering, procurement, and construction services across six critical sectors, driving the global transition toward sustainable and robust infrastructure.
            </p>
          </div>
          <button className="hidden md:block bg-transparent border border-brand-yellow text-brand-yellow px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-brand-gray border border-white/5 p-10 hover:border-brand-yellow/50 transition-all duration-500 group relative overflow-hidden animate-on-scroll fade-up delay-${(index % 3 + 1) * 100}`}
            >
              {/* Subtle background icon */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transform group-hover:scale-110 transition-all duration-500 text-white">
                {service.icon}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                   <p className="text-gray-300 mb-6 text-sm">
                     {service.desc} High-precision engineering meeting the most rigorous industrial standards with advanced technology and expert craftsmanship.
                   </p>
                </div>
                
                <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-sm tracking-wider">
                  <span>View Details</span>
                  <ArrowUpRight size={18} />
                </div>
                
                <div className="w-full h-1 bg-brand-yellow mt-6 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
