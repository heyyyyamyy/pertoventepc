import React from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Image Half */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 animate-on-scroll fade-left duration-1000">
         <img
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2069&auto=format&fit=crop"
            alt="Offshore Background"
            className="w-full h-full object-cover opacity-20 lg:opacity-40"
         />
         <div className="absolute inset-0 bg-brand-dark/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-dark lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="pt-10 animate-on-scroll fade-right">
            <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
              <ChevronRight size={16} />
              <span>Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-8 leading-none">
              Request <br/> Information <br/> Now
            </h2>
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
              Ready to start your next global EPC project? Reach out to our expert team for a comprehensive consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white uppercase">UK Office</h4>
                  <p className="text-gray-400 text-lg group-hover:text-brand-yellow transition-colors">(+44) 1224 567890</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white uppercase">India Office</h4>
                  <p className="text-gray-400 text-lg group-hover:text-brand-yellow transition-colors">(+91) 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white uppercase">Our Email</h4>
                  <p className="text-gray-400 text-lg group-hover:text-brand-yellow transition-colors">info@petroventepc.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-brand-gray/30 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl animate-on-scroll fade-up delay-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-bold uppercase text-sm flex gap-1">First Name <span className="text-brand-yellow">*</span></label>
                  <input type="text" placeholder="Clara" className="w-full bg-transparent border-b border-gray-600 focus:border-brand-yellow py-3 text-white outline-none placeholder-gray-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white font-bold uppercase text-sm flex gap-1">Last Name <span className="text-brand-yellow">*</span></label>
                  <input type="text" placeholder="Rose" className="w-full bg-transparent border-b border-gray-600 focus:border-brand-yellow py-3 text-white outline-none placeholder-gray-500 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-bold uppercase text-sm flex gap-1">Phone <span className="text-brand-yellow">*</span></label>
                  <input type="tel" placeholder="+44 / +91 ..." className="w-full bg-transparent border-b border-gray-600 focus:border-brand-yellow py-3 text-white outline-none placeholder-gray-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white font-bold uppercase text-sm flex gap-1">Email <span className="text-brand-yellow">*</span></label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-transparent border-b border-gray-600 focus:border-brand-yellow py-3 text-white outline-none placeholder-gray-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white font-bold uppercase text-sm flex gap-1">Message <span className="text-brand-yellow">*</span></label>
                <textarea rows={4} placeholder="Hello there!" className="w-full bg-transparent border-b border-gray-600 focus:border-brand-yellow py-3 text-white outline-none placeholder-gray-500 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-yellow text-brand-dark font-bold uppercase tracking-wide py-4 mt-4 hover:bg-white transition-colors">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
