
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b3e763dd-390b-4fe0-9881-bc9a3ff798a2.png" 
                alt="VyapaarGroww Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold">
                <span className="text-white">Vyapaar</span>
                <span className="text-green-400">Groww</span>
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering your financial future with revolutionary business solutions, 
              expert accounting services, and cutting-edge technology innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Advanced Accountancy',
                'Tax Optimization',
                'Strategic Advisory',
                'Management Excellence',
                'Tech Solutions'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-300 hover:text-green-400 transition-colors duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-slate-300">+91 7982265361</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-slate-300">vyapaargroww@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-slate-300">
                  Hari Nagar Ashram, New Delhi, Delhi 110014
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.instagram.com/ca_mansi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/mansi-gupta-a5aa28232/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} VyapaarGroww. All rights reserved. | Elite Chartered Accountancy Firm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
