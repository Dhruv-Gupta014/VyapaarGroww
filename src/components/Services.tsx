
import React from 'react';
import { Calculator, TrendingUp, Shield, Smartphone, FileText, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Accountancy Services",
      description: "Comprehensive bookkeeping, financial reporting, and accounting solutions tailored to your business needs.",
      features: ["Financial Statements", "Bookkeeping", "Audit Support", "Compliance"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic business consulting to help you make informed decisions and drive growth.",
      features: ["Business Planning", "Performance Analysis", "Risk Management", "Growth Strategy"]
    },
    {
      icon: Shield,
      title: "Tax Planning",
      description: "Expert tax planning and preparation services to minimize your tax liability legally.",
      features: ["Tax Returns", "Tax Planning", "GST Services", "Tax Compliance"]
    },
    {
      icon: Users,
      title: "Management Consulting",
      description: "Operational efficiency and management solutions to streamline your business processes.",
      features: ["Process Optimization", "Team Management", "Operational Audit", "Efficiency Analysis"]
    },
    {
      icon: Smartphone,
      title: "Tech-Based Solutions",
      description: "Modern technology solutions to digitize and automate your financial processes.",
      features: ["Digital Accounting", "Cloud Solutions", "Automation Tools", "Software Integration"]
    },
    {
      icon: FileText,
      title: "Compliance Services",
      description: "Ensure your business stays compliant with all regulatory requirements and standards.",
      features: ["Regulatory Compliance", "Legal Documentation", "Filing Services", "Audit Preparation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to empower your business growth and success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
