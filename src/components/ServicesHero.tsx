
import React from 'react';
import { Calculator, TrendingUp, Shield, Smartphone, FileText, Users } from 'lucide-react';

const ServicesHero = () => {
  const serviceIcons = [
    { icon: Calculator, position: 'top-20 left-10', color: 'from-blue-600 to-indigo-600' },
    { icon: TrendingUp, position: 'top-40 right-20', color: 'from-indigo-600 to-purple-600' },
    { icon: Shield, position: 'bottom-40 left-20', color: 'from-emerald-600 to-blue-600' },
    { icon: Smartphone, position: 'bottom-20 right-10', color: 'from-amber-600 to-orange-600' },
    { icon: FileText, position: 'top-1/2 left-5', color: 'from-rose-600 to-pink-600' },
    { icon: Users, position: 'top-1/2 right-5', color: 'from-violet-600 to-purple-600' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Service Icons */}
      {serviceIcons.map((service, index) => (
        <div 
          key={index}
          className={`absolute ${service.position} w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl animate-float border border-white/20`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <service.icon size={24} className="text-white" />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent animate-fade-in">
            Our Services
          </h1>
          
          <p className="text-2xl text-purple-600 mb-12 animate-fade-in delay-300">
            Comprehensive Solutions for Every Business Need
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed animate-fade-in delay-500">
            From traditional accounting to revolutionary tech solutions, 
            we offer a complete ecosystem of services designed to transform 
            your business operations and accelerate growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
