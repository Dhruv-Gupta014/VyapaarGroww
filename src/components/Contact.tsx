
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Google Form URL with pre-filled data
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe8q3GKvPKpvelCuW_sHlCqv4qmko-fXq9IXusYjQk_6Qfarw/viewform?usp=pp_url
&entry.274608449=${encodeURIComponent(formData.name)}
&entry.255515796=${encodeURIComponent(formData.email)}
&entry.2103064601=${encodeURIComponent(formData.phone)}
&entry.1569469178=${encodeURIComponent(formData.company)}
&entry.310120251=${encodeURIComponent(formData.message)}`;

    
    // Open Google Form in new tab
    window.open(googleFormUrl, '_blank');
    
    toast({
      title: "Form Opened",
      description: "Google Form has been opened in a new tab. Please complete your submission there.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7982265361",
      action: "tel:+917982265361"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "vyapaargroww@gmail.com",
      action: "mailto:vyapaargroww@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Hari Nagar Ashram, New Delhi, Delhi 110014",
      action: "#map"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/ca_mansi/",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mansi-gupta-a5aa28232/",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your financial future? Contact us today for expert consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div id="map" className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9947532025815!2d72.82772081490213!3d19.041076087116836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b3b6b1a1a1%3A0x1234567890abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Submit Query
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
