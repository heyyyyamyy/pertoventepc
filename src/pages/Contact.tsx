import React from 'react';
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/leader-offshore.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Contact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Get In <span className="text-brand-yellow">Touch</span>
          </h1>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <Phone size={32} />, title: "UK Office", info: "(+44) 1224 567890", sub: "Aberdeen, Scotland" },
              { icon: <Phone size={32} />, title: "India Office", info: "(+91) 98765 43210", sub: "Kakinada, AP" },
              { icon: <Mail size={32} />, title: "Email Us", info: "info@petroventepc.com", sub: "Online Support 24/7" },
              { icon: <Clock size={32} />, title: "Working Hours", info: "Mon - Fri: 09:00 - 18:00", sub: "Weekend Closed" }
            ].map((item, i) => (
              <div key={i} className="bg-brand-gray p-8 border border-white/5 hover:border-brand-yellow transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                   {item.icon}
                 </div>
                 <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                 <p className="text-white font-medium">{item.info}</p>
                 <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
            {/* Map Placeholder */}
            <div className="h-[500px] w-full bg-gray-800 rounded-sm overflow-hidden relative border border-white/10">
              <iframe 
                title="PetroventEPC headquarters in Kakinada, Andhra Pradesh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.482020281691!2d82.23594874020959!3d16.95388052126229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38281a8b1bbd15%3A0x6b63798cf0cc20e9!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1717887752187!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-brand-dark p-4 border border-white/10 shadow-xl">
                 <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-sm">
                   <MapPin size={16} />
                   <span>HQ Location</span>
                 </div>
                 <p className="text-white text-xs mt-1">Kakinada, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
               <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6">Send us a Message</h2>
               <p className="text-gray-400 mb-8">Have a question or need a consultation? Fill out the form below and our global team will get back to you shortly.</p>
               
               <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-white font-bold uppercase text-xs tracking-wider">Name</label>
                     <input type="text" className="w-full bg-brand-gray border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-white font-bold uppercase text-xs tracking-wider">Email</label>
                     <input type="email" className="w-full bg-brand-gray border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="email@example.com" />
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-white font-bold uppercase text-xs tracking-wider">Phone</label>
                     <input type="tel" className="w-full bg-brand-gray border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="+44 / +91 ..." />
                   </div>
                   <div className="space-y-2">
                     <label className="text-white font-bold uppercase text-xs tracking-wider">Subject</label>
                     <input type="text" className="w-full bg-brand-gray border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="Project Inquiry" />
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-white font-bold uppercase text-xs tracking-wider">Message</label>
                   <textarea rows={6} className="w-full bg-brand-gray border border-white/10 p-4 text-white outline-none focus:border-brand-yellow transition-colors" placeholder="How can we help you?"></textarea>
                 </div>
                 
                 <button className="bg-brand-yellow text-brand-dark px-10 py-4 font-bold uppercase tracking-wide hover:bg-white transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)]">
                   Send Message
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
