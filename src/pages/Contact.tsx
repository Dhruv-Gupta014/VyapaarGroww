
import React from 'react';
import Header from '../components/Header';
import ContactHero from '../components/ContactHero';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-100 relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
