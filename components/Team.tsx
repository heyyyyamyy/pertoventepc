import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    { name: "Arjun Reddy", role: "Global Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
    { name: "Sarah Jenkins", role: "Head of Offshore Projects", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
    { name: "Rahul Sharma", role: "Chief Engineer (India)", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6 mb-16 text-center animate-on-scroll fade-up">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-4">
          Our <span className="text-brand-yellow">Leadership</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Guided by experienced global visionaries committed to infrastructural excellence.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, index) => (
            <div key={index} className={`group bg-brand-dark border border-white/5 pb-6 hover:border-brand-yellow/50 transition-all duration-300 w-full md:w-80 animate-on-scroll fade-up delay-${index * 200}`}>
              <div className="relative overflow-hidden mb-6 h-80">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-white transition-colors"><Linkedin size={20} /></a>
                </div>
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-1">{member.name}</h3>
                <p className="text-brand-yellow text-sm font-medium">{member.role}</p>
              </div>
              
              <div className="mx-auto w-12 h-1 bg-brand-yellow mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
