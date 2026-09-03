import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-brand-yellow text-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-pattern opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll fade-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6 leading-tight">
              Ready to <br/> Build Your Next <br/> Mega Project?
            </h2>
            <div className="w-24 h-2 bg-brand-dark mb-8"></div>
            
            {/* Gallery Strip */}
            <div className="flex gap-4 mt-12">
               {[
                 "/images/offshore-platform.jpg",
                 "/images/offshore-wind.jpg",
                 "/images/industrial-power.jpg"
               ].map((src, i) => (
                 <div key={i} className={`w-32 h-24 border-2 border-brand-dark/20 rounded-sm overflow-hidden animate-on-scroll zoom-in delay-${(i + 1) * 200}`}>
                   <img src={src} alt="Gallery" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:pl-10 animate-on-scroll fade-left delay-200">
            <p className="text-xl text-brand-dark mb-6 font-bold">
              We provide comprehensive EPC solutions tailored to your specific global energy needs.
            </p>
            <p className="text-brand-dark/80 mb-10 leading-relaxed font-medium">
              From concept to completion, our international team ensures the highest quality standards, zero-compromise safety, and on-time delivery across offshore and onshore environments.
            </p>
            
            <div className="flex gap-6">
              <button onClick={() => navigate('/quote')} className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl">
                Get Started
              </button>
              <button onClick={() => navigate('/contact')} className="bg-transparent border border-brand-dark text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-brand-dark hover:text-brand-yellow transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
