import React from 'react';
import { Anchor, Wind, Droplets } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Droplets size={40} />,
      title: "Petroleum Engineering",
      description: "Expert oversight and execution of complex refinery and pipeline networks."
    },
    {
      icon: <Wind size={40} />,
      title: "Wind Construction",
      description: "Advanced machinery and skilled workforce delivering precision in turbine erection."
    },
    {
      icon: <Anchor size={40} />,
      title: "Offshore Projects",
      description: "Functional marine engineering meeting modern safety and deepwater standards."
    }
  ];

  return (
    <section className="relative z-20 -mt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-brand-gray border border-white/5 p-10 hover:border-brand-yellow/50 transition-all duration-300 group shadow-lg animate-on-scroll fade-up delay-${(index + 1) * 100}`}
            >
              <div className="text-brand-yellow mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase group-hover:text-brand-yellow transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                {feature.description}
              </p>
              <div className="w-12 h-1 bg-brand-yellow mt-8 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
