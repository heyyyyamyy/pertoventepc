import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Building, X } from 'lucide-react';
import { projectsData, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'petroleum', label: 'Petroleum' },
    { id: 'wind', label: 'Wind Construction' },
    { id: 'power', label: 'Power Energy' },
    { id: 'offshore', label: 'Offshore' },
    { id: 'civil', label: 'Civil Infrastructure' },
    { id: 'industrial', label: 'Industrial' },
  ];

  // Re-run animation observer when filter changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filter, filteredProjects.length]);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/industrial-power.jpg" 
            alt="Projects Background" 
            className="w-full h-full object-cover opacity-20 animate-on-scroll zoom-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center animate-on-scroll fade-up">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">
            Our <span className="text-brand-yellow">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll fade-up delay-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-brand-yellow text-brand-dark border-brand-yellow' 
                    : 'bg-transparent text-gray-400 border-white/20 hover:border-brand-yellow hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative overflow-hidden bg-brand-gray border border-white/5 animate-on-scroll fade-up delay-${((index % 3) + 1) * 100} cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-brand-yellow text-sm uppercase tracking-widest mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      Client: {project.client}
                    </p>
                    <button className="border border-white text-white px-6 py-2 text-xs font-bold uppercase hover:bg-white hover:text-brand-dark transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      View Details
                    </button>
                  </div>
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest z-20 ${project.year === 'Ongoing' ? 'bg-brand-yellow text-brand-dark' : 'bg-white text-brand-dark'}`}>
                    {project.year}
                  </div>
                </div>
                <div className="p-6 bg-brand-gray border-t border-white/5 min-h-[140px] flex flex-col justify-between">
                  <h3 className="text-base font-bold text-white uppercase mb-4 line-clamp-2 leading-snug">{project.title}</h3>
                  <div className="flex justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-brand-yellow" />
                      <span className="truncate max-w-[150px]">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building size={12} className="text-brand-yellow" />
                      <span className="uppercase">{categories.find(c => c.id === project.category)?.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-brand-gray border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-brand-yellow rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-widest z-20 ${selectedProject.year === 'Ongoing' ? 'bg-brand-yellow text-brand-dark' : 'bg-white text-brand-dark'}`}>
                {selectedProject.year}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <div className="mb-2 text-brand-yellow text-sm font-bold uppercase tracking-widest">
                {categories.find(c => c.id === selectedProject.category)?.label}
              </div>
              <h2 className="text-3xl font-heading font-bold text-white uppercase mb-6 leading-tight">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-brand-yellow mt-1"><Building size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Client</div>
                    <div className="text-white font-medium">{selectedProject.client}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-yellow mt-1"><MapPin size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</div>
                    <div className="text-white font-medium">{selectedProject.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Banner */}
      <section className="py-16 bg-brand-yellow text-brand-dark animate-on-scroll fade-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase mb-2">Ready for your next project?</h2>
              <p className="text-brand-dark/80 font-medium">We have the expertise to deliver beyond expectations globally.</p>
            </div>
            <a href="#/contact" className="bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-all shadow-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
