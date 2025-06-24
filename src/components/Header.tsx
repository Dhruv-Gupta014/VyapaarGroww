
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload the logo to prevent flash
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = "/lovable-uploads/b3e763dd-390b-4fe0-9881-bc9a3ff798a2.png";
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {logoLoaded ? (
                <img 
                  src="/lovable-uploads/b3e763dd-390b-4fe0-9881-bc9a3ff798a2.png" 
                  alt="VyapaarGroww Logo" 
                  className="w-12 h-12 object-contain transform group-hover:scale-110 transition-all duration-300"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg animate-pulse"></div>
              )}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-green-500 rounded-xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="text-2xl font-bold text-slate-800">
              <span className="text-slate-700">Vyapaar</span>
              <span className="text-green-600">Groww</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-green-600'
                    : 'text-slate-700 hover:text-green-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 text-left ${
                    location.pathname === item.path
                      ? 'text-green-600'
                      : 'text-slate-700 hover:text-green-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
