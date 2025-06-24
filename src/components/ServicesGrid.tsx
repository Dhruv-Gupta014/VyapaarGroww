
import React from 'react';
import { Calculator, TrendingUp, Shield, Smartphone, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Advanced Accountancy",
      description: "Next-generation bookkeeping, financial reporting, and accounting solutions powered by AI and automation.",
      features: ["AI-Powered Analytics", "Real-time Reporting", "Automated Bookkeeping", "Compliance Monitoring"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: TrendingUp,
      title: "Strategic Advisory",
      description: "Data-driven business consulting with predictive analytics to maximize growth potential and ROI.",
      features: ["Growth Hacking", "Market Analysis", "Risk Assessment", "Performance Optimization"],
      gradient: "from-green-500 to-emerald-500",
      delay: "0.2s"
    },
    {
      icon: Shield,
      title: "Tax Optimization",
      description: "Advanced tax planning strategies using machine learning to minimize liability and maximize savings.",
      features: ["Smart Tax Planning", "Automated Filing", "GST Optimization", "Compliance Automation"],
      gradient: "from-emerald-500 to-green-500",
      delay: "0.4s"
    },
    {
      icon: Users,
      title: "Management Excellence",
      description: "Revolutionary management consulting with AI-powered insights for operational transformation.",
      features: ["Process Automation", "Team Optimization", "Digital Transformation", "Efficiency Analytics"],
      gradient: "from-blue-500 to-indigo-500",
      delay: "0.6s"
    },
    {
      icon: Smartphone,
      title: "Tech Solutions",
      description: "Cutting-edge fintech solutions including blockchain, AI, and cloud-based financial management.",
      features: ["Blockchain Integration", "AI Automation", "Cloud Solutions", "Mobile Apps"],
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.8s"
    },
    {
      icon: FileText,
      title: "Compliance Mastery",
      description: "Automated compliance management with real-time monitoring and predictive compliance alerts.",
      features: ["Automated Monitoring", "Legal Documentation", "Regulatory Updates", "Audit Preparation"],
      gradient: "from-purple-500 to-pink-500",
      delay: "1s"
    }
  ];

  const handleLearnMore = (serviceTitle: string) => {
    // For now, scroll to contact section or show a modal
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirect to contact page
      window.location.href = '/contact';
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 hover:border-slate-300 transition-all duration-500 hover:scale-105 hover:bg-white shadow-xl hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleLearnMore(service.title)}
                className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 text-white px-12 py-6 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            Get Custom Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
