import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, Factory } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleQuoteClick = () => {
    navigate('/quote');
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark shadow-xl' : 'bg-transparent'}`}>
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-white/10 bg-[#011222]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2.5 flex justify-between items-center">
          {/* Social Icons (Left) */}
          <div className="flex gap-3 items-center">
             <a href="#" className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all"><Facebook size={12} /></a>
             <a href="#" className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all"><Twitter size={12} /></a>
             <a href="#" className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all"><Youtube size={12} /></a>
             <a href="#" className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all"><Linkedin size={12} /></a>
          </div>
          {/* Contact Info (Right) */}
          <div className="flex gap-8 text-xs font-medium text-gray-300">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Phone size={14} className="text-brand-yellow group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide group-hover:text-brand-yellow transition-colors">(+44) 1224 567890</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Mail size={14} className="text-brand-yellow group-hover:scale-110 transition-transform" />
              <span className="tracking-wide group-hover:text-brand-yellow transition-colors">info@petroventepc.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'py-4' : 'py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-20">
            <div className="text-brand-yellow transform group-hover:rotate-45 transition-transform duration-500">
               <Factory size={36} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-white tracking-wide uppercase leading-none group-hover:text-brand-yellow transition-colors">
                Petrovent<span className="text-brand-yellow">EPC</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-brand-yellow' : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-yellow transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:block z-20">
            <button 
              onClick={handleQuoteClick}
              className="bg-brand-yellow text-brand-dark px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,90,0,0.3)] hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:text-brand-yellow transition-colors z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-bold text-white hover:text-brand-yellow uppercase tracking-widest transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleQuoteClick}
              className="mt-8 bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-wide"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;