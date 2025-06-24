
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div ref={heroRef} className="absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/20 rounded-full backdrop-blur-sm animate-float shadow-xl border border-blue-200/20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-500/10 to-blue-500/20 rounded-xl rotate-45 animate-bounce shadow-xl border border-green-200/20"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-blue-500/20 rounded-full animate-pulse shadow-xl border border-emerald-200/20"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-green-500/20 rounded-lg animate-spin shadow-xl border border-amber-200/20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 3D Logo Animation */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 animate-float border border-slate-200">
                <img 
                  src="/lovable-uploads/b3e763dd-390b-4fe0-9881-bc9a3ff798a2.png" 
                  alt="VyapaarGroww Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-green-400 to-emerald-400 rounded-3xl opacity-20 animate-ping"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 bg-clip-text text-transparent">Vyapaar</span>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">Groww</span>
          </h1>
          
          <p className="text-3xl md:text-4xl text-slate-600 mb-8 animate-fade-in delay-300 font-light">
            Empowering Your Financial Future
          </p>
          
          <p className="text-xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-500">
            We help businesses thrive with end-to-end solutions in accountancy, management, 
            business advisory, tax planning, and cutting-edge technology innovations. 
            Your success is our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
            <Link 
              to="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 text-white px-12 py-6 rounded-full font-semibold flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <Link 
              to="/about"
              className="group border-2 border-green-300 text-slate-700 px-12 py-6 rounded-full font-semibold hover:bg-green-50 hover:border-green-400 transition-all duration-500 backdrop-blur-sm"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-green-400 via-blue-400 to-transparent rounded-full shadow-lg"></div>
      </div>
    </section>
  );
};

export default Hero;
