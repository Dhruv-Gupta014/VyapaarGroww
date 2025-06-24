
import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with comprehensive financial solutions that drive growth and success."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Expert chartered accountants and business advisors dedicated to your financial excellence."
    },
    {
      icon: Award,
      title: "Our Excellence",
      description: "Proven track record of helping businesses achieve their financial goals with precision."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology solutions combined with traditional accounting expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            About VyapaarGroww
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a premier chartered accountancy firm committed to providing exceptional 
            financial services that help businesses navigate complex financial landscapes 
            and achieve sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose VyapaarGroww?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
