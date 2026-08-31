import React from 'react';
import { ChevronRight, FileText, Upload, Calendar } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Blueprint" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Get Quote</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Request A <span className="text-brand-yellow">Quote</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Provide us with your global project details and estimation requirements. Our engineering team will analyze your needs and provide a comprehensive EPC proposal.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-brand-gray border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl">
            <form className="space-y-10">
              
              {/* Section 1: Contact Info */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Full Name *</label>
                    <input type="text" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Company Name</label>
                    <input type="text" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Email Address *</label>
                    <input type="email" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Phone Number *</label>
                    <input type="tel" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">2</span>
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Project Type</label>
                    <select className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors appearance-none cursor-pointer">
                      <option>Petroleum & Refinery Construction</option>
                      <option>Offshore Platforms & Deepwater</option>
                      <option>Wind Farm Installation (On/Offshore)</option>
                      <option>Power Plant EPC</option>
                      <option>Civil Infrastructure</option>
                      <option>Industrial Manufacturing Plant</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Estimated Budget (Optional)</label>
                    <input type="text" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="USD $" />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-gray-400 text-sm">Project Description & Requirements *</label>
                  <textarea rows={5} className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="Please describe the scope, dimensions, location, and specific requirements..."></textarea>
                </div>
              </div>

              {/* Section 3: Timeline & Files */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="w-8 h-8 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center text-sm">3</span>
                  Timeline & Attachments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Expected Start Date</label>
                    <div className="relative">
                      <input type="date" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Global Location / Region</label>
                     <input type="text" className="w-full bg-brand-dark border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="City, Country / Offshore Block" />
                  </div>
                </div>

                <div className="border-2 border-dashed border-white/20 rounded-sm p-8 text-center hover:border-brand-yellow transition-colors cursor-pointer bg-brand-dark/50">
                  <Upload className="mx-auto text-brand-yellow mb-4" size={32} />
                  <p className="text-white font-medium mb-1">Upload Project Files (PDF, CAD, Specs)</p>
                  <p className="text-gray-500 text-sm">Drag & drop or click to browse (Max 50MB)</p>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full md:w-auto bg-brand-yellow text-brand-dark px-12 py-5 font-bold uppercase tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] text-lg">
                  Submit Request
                </button>
                <p className="text-gray-500 text-xs mt-4 text-center md:text-left">
                  By submitting this form, you agree to our privacy policy and allow our global team to contact you regarding this inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
