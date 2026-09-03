import React from 'react';
import { ChevronRight, Droplets, Wind, Zap, Anchor, HardHat, Factory } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { 
      icon: <Droplets size={40} />, 
      title: "Petroleum", 
      desc: "Comprehensive engineering for offshore drilling platforms, refineries, and pipelines." 
    },
    { 
      icon: <Wind size={40} />, 
      title: "Wind Construction", 
      desc: "Installation of onshore and offshore wind turbines, substations, and grid connections." 
    },
    { 
      icon: <Zap size={40} />, 
      title: "Power Energy", 
      desc: "Erection of thermal, nuclear, and hydroelectric power generation plants globally." 
    },
    { 
      icon: <Anchor size={40} />, 
      title: "Offshore Projects", 
      desc: "Subsea infrastructure, FPSO vessel conversions, and deepwater production platforms." 
    },
    { 
      icon: <HardHat size={40} />, 
      title: "Civil Infrastructure", 
      desc: "Large-scale civil works including industrial ports, super-highways, and logistics hubs." 
    },
    { 
      icon: <Factory size={40} />, 
      title: "Industrial", 
      desc: "Custom heavy fabrication for specialized industrial machinery and smelting structures." 
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
          <ChevronRight size={16} />
          <span>Sectors</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
          Industries We <span className="text-brand-yellow">Serve</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Delivering specialized EPC solutions across core global energy and infrastructural sectors.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-brand-gray p-8 border border-white/5 hover:border-brand-yellow transition-all duration-300 hover:-translate-y-1 rounded-sm animate-on-scroll fade-up delay-${(index % 3) * 100}`}
            >
              <div className="mb-6 text-gray-400 group-hover:text-brand-yellow transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-3 group-hover:text-brand-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
