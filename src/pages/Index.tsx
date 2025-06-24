
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
