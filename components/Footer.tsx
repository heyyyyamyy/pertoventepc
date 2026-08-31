import React from 'react';
import { Factory, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section - Yellow Box */}
        <div className="relative -mt-32 mb-20">
           <div className="bg-brand-yellow p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-sm shadow-[0_0_30px_rgba(255,90,0,0.15)]">
             <div className="lg:w-1/2">
               <h3 className="text-3xl font-heading font-bold text-brand-dark uppercase mb-2">Subscribe to our newsletter</h3>
               <p className="text-brand-dark/80">Stay updated with the latest in global energy construction.</p>
             </div>
             <div className="lg:w-1/2 w-full flex flex-col sm:flex-row gap-4">
               <input 
                 type="email" 
                 placeholder="example@mail.com" 
                 className="flex-grow px-6 py-4 bg-white text-brand-dark outline-none border border-transparent focus:border-brand-dark"
               />
               <button className="bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors">
                 Subscribe
               </button>
             </div>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-white/10 pb-16">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase">Call Us</p>
              <p className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">(+44) 1224 567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase">Head Office</p>
              <p className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">Kakinada, India | Aberdeen, UK</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase">Email Us</p>
              <p className="text-white font-bold text-lg group-hover:text-brand-yellow transition-colors">info@petroventepc.com</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Factory className="text-brand-yellow h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-heading text-white uppercase leading-none">
                  Petrovent<span className="text-brand-yellow">EPC</span>
                </span>
                <span className="text-[0.6rem] text-gray-400 tracking-[0.2em] uppercase">Private Limited</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading global EPC contractor with 15 years of experience serving Petroleum, Wind, Power Energy, and Offshore sectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
             <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 text-brand-yellow">Explore</h4>
             <ul className="space-y-4">
               {['Home', 'About', 'Services', 'Projects'].map((item) => (
                 <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-brand-yellow transition-colors">{item}</Link></li>
               ))}
             </ul>
          </div>

           {/* Services */}
           <div>
             <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 text-brand-yellow">Services</h4>
             <ul className="space-y-4">
               {['Petroleum Projects', 'Wind Construction', 'Power Energy', 'Offshore Projects', 'Civil Infrastructure'].map((item) => (
                 <li key={item}><Link to="/services" className="text-gray-400 hover:text-brand-yellow transition-colors">{item}</Link></li>
               ))}
             </ul>
          </div>

           {/* Quick Access */}
           <div>
             <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 text-brand-yellow">Quick Access</h4>
             <ul className="space-y-4">
               {['Request a Quote', 'Contact Us', 'Careers'].map((item) => (
                 <li key={item}><a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">{item}</a></li>
               ))}
             </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex flex-col gap-1">
             <p>Copyright © 2026 PetroventEPC Pvt. Ltd. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;