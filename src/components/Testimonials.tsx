import React from 'react';
import { Quote, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="h-[400px] lg:h-auto relative min-h-[500px] animate-on-scroll fade-right">
          <img 
            src="/images/leader-offshore.jpg" 
            alt="Client Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/20"></div>
          
          {/* Quote Card Overlay */}
          <div className="absolute bottom-0 left-0 lg:right-0 lg:left-auto lg:translate-x-1/2 p-10 bg-brand-gray border-t-4 border-brand-yellow shadow-2xl max-w-lg mx-6 lg:mx-0 mb-10 lg:mb-20 z-20 animate-on-scroll zoom-in delay-200">
             <Quote className="text-brand-yellow mb-6 h-12 w-12" />
             <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
               "PetroventEPC delivered exceptional offshore structural work for our new North Sea platform. Their precision, adherence to maritime safety protocols, and timely execution were unmatched."
             </p>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow">
                 <img src="/images/leader-engineer.jpg" alt="Daniel Hoffmann" />
               </div>
               <div>
                 <h4 className="text-white font-bold font-heading uppercase">Daniel Hoffmann</h4>
                 <p className="text-brand-yellow text-sm">Lead Marine Engineer</p>
               </div>
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="py-24 px-6 lg:px-20 lg:py-32 bg-brand-dark animate-on-scroll fade-left delay-200">
           <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
              <ChevronRight size={16} />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-8 leading-tight">
              Global Client <br/> Feedback
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
              Our reputation is built on the trust of our international partners. We take pride in the lasting relationships we've forged with industry leaders across the petroleum, renewable energy, and heavy civil sectors.
            </p>
            <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-all duration-300">
              View All Reviews
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
