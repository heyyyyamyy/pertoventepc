import React, { useState } from 'react';
import { ChevronRight, Anchor, Factory, Droplets, HardHat, Zap, Wind, CheckCircle2, Plus, Minus } from 'lucide-react';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const allServices = [
    {
      icon: <Droplets size={32} />,
      title: "Petroleum Projects",
      desc: "Comprehensive EPC services for oil refineries, petrochemical plants, and pipeline networks globally.",
      image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Wind size={32} />,
      title: "Wind Construction",
      desc: "Specialized in offshore and onshore wind farm development, turbine erection, and substation build.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Zap size={32} />,
      title: "Power Energy",
      desc: "Delivering thermal, nuclear, and hydroelectric power generation plants with high efficiency.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Anchor size={32} />,
      title: "Offshore Projects",
      desc: "Expertise in deepwater platforms, FPSO conversions, and subsea infrastructure installations.",
      image: "https://images.unsplash.com/photo-1617116467384-5f80b987515d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <HardHat size={32} />,
      title: "Civil Infrastructure",
      desc: "Large-scale civil engineering for ports, bridges, heavy equipment foundries, and highways.",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Factory size={32} />,
      title: "Industrial Manufacturing",
      desc: "Design and construction of complex manufacturing facilities, assembly lines, and smelting plants.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const industries = [
    { name: "Global Petroleum", desc: "Offshore drilling and refining.", icon: <Droplets size={24} /> },
    { name: "Renewable Wind", desc: "Turbine installation and grid linking.", icon: <Wind size={24} /> },
    { name: "Power & Utilities", desc: "Nuclear, thermal, and hydro EPC.", icon: <Zap size={24} /> },
    { name: "Offshore Marine", desc: "FPSO and deepwater infrastructure.", icon: <Anchor size={24} /> },
    { name: "Heavy Civil", desc: "Bridges, ports, and highways.", icon: <HardHat size={24} /> },
    { name: "Industrial Fab", desc: "Smelting and assembly lines.", icon: <Factory size={24} /> }
  ];

  const faqs = [
    { question: "What is the scale of projects PetroventEPC handles?", answer: "PetroventEPC specializes in mega-projects across global locations, handling everything from deepwater offshore installations to national power grid constructions." },
    { question: "Where are your headquarters?", answer: "We maintain dual headquarters: one in Aberdeen, UK, and another in Kakinada, India, allowing us to seamlessly manage European and Asian operations." },
    { question: "Do you handle offshore maintenance?", answer: "Yes, we are highly experienced in handling critical offshore platform turnarounds and deepwater subsea maintenance." },
    { question: "What safety standards do you follow?", answer: "PetroventEPC strictly adheres to ISO, API, and international maritime safety standards, operating with a zero-compromise safety policy." },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Our <span className="text-brand-yellow">Expertise</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="group bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-yellow/50 transition-all duration-300 rounded-sm">
                <div className="h-48 overflow-hidden relative">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-all"></div>
                </div>
                <div className="p-8 relative">
                   <div className="absolute -top-10 right-8 bg-brand-yellow text-brand-dark p-4 rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                     {service.icon}
                   </div>
                   <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase pr-8 mt-2">{service.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                   <a href="#" className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                     View Details <ChevronRight size={16} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-brand-gray border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start gap-6 p-6 border border-white/5 hover:bg-white/5 transition-colors group">
                <div className="text-brand-yellow group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-4">Our EPC Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From global project planning to final handover, we ensure safety and quality at every step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Engineering", desc: "Detailed assessment and structural modeling." },
               { step: "02", title: "Procurement", desc: "Global sourcing of high-grade materials." },
               { step: "03", title: "Construction", desc: "Safe lifting and offshore installation." },
               { step: "04", title: "Commissioning", desc: "Final testing, quality checks, and handover." }
             ].map((item, i) => (
               <div key={i} className="relative p-6 border-l border-brand-yellow/30 md:border-l-0 md:border-t hover:bg-white/5 transition-colors">
                 <span className="text-6xl font-heading font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                 <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                 <p className="text-gray-400 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-gray">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                 <div className="flex items-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
                    <CheckCircle2 size={16} />
                    <span>FAQ</span>
                 </div>
                 <h2 className="text-4xl font-heading font-bold text-white uppercase mb-6">Common <br/> Questions</h2>
                 <p className="text-gray-400 mb-8">
                    Find answers to the most frequently asked questions about our global services.
                 </p>
                 <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all">
                   Contact Us
                 </button>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                 {faqs.map((faq, index) => (
                   <div key={index} className="bg-brand-dark border border-white/5 rounded-sm overflow-hidden transition-all duration-300 hover:border-brand-yellow/30">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className={`text-lg font-bold uppercase transition-colors ${openFaq === index ? 'text-brand-yellow' : 'text-white'}`}>
                          {faq.question}
                        </span>
                        {openFaq === index ? <Minus size={20} className="text-brand-yellow" /> : <Plus size={20} className="text-gray-500" />}
                      </button>
                      <div className={`px-6 pb-6 text-gray-400 leading-relaxed transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'}`}>
                        {faq.answer}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
