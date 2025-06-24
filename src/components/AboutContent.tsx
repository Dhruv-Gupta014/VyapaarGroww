
import React from 'react';
import { Users, Target, Award, Lightbulb, Zap, Shield } from 'lucide-react';

const AboutContent = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with comprehensive financial solutions that drive exponential growth and success.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Elite chartered accountants and business strategists dedicated to your financial excellence and innovation.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning track record of helping businesses achieve their financial goals with precision and strategy.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Revolutionary technology solutions combined with traditional accounting mastery for unprecedented results.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid deployment of solutions with real-time insights that accelerate your business transformation.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Absolute Security",
      description: "Military-grade security protocols ensuring your financial data remains protected and confidential.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 hover:border-slate-300 transition-all duration-500 hover:scale-105 hover:bg-white shadow-xl hover:shadow-2xl"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/50 shadow-xl">
          <h3 className="text-4xl font-bold mb-12 text-center text-slate-800">Why VyapaarGroww Leads</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-slate-600 text-lg font-medium">Success Stories</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-slate-600 text-lg font-medium">Years Excellence</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-slate-600 text-lg font-medium">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-600 text-lg font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
