
import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  const floatingElements = [
    { icon: Users, position: 'top-20 left-10', color: 'from-blue-600 to-indigo-600' },
    { icon: Target, position: 'top-40 right-20', color: 'from-indigo-600 to-purple-600' },
    { icon: Award, position: 'bottom-40 left-20', color: 'from-emerald-600 to-blue-600' },
    { icon: Lightbulb, position: 'bottom-20 right-10', color: 'from-amber-600 to-orange-600' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Icons */}
      {floatingElements.map((element, index) => (
        <div 
          key={index}
          className={`absolute ${element.position} w-20 h-20 bg-gradient-to-br ${element.color} rounded-2xl flex items-center justify-center shadow-xl animate-float border border-white/20`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <element.icon size={32} className="text-white" />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent animate-fade-in">
            About Us
          </h1>
          
          <p className="text-2xl text-blue-600 mb-12 animate-fade-in delay-300">
            Pioneering Excellence in Financial Solutions
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed animate-fade-in delay-500">
            At VyapaarGroww, we're not just accountants – we're financial architects 
            building the foundation of your success. With cutting-edge technology 
            and decades of expertise, we transform complex financial challenges 
            into growth opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
