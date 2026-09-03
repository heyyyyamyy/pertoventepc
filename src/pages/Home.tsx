import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Industries from '../components/Industries';
import CTA from '../components/CTA';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <Services />
      <Industries />
      <CTA />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Blog />
      <ContactForm />
    </>
  );
};

export default Home;