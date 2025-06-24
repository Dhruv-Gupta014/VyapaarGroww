
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactContent = () => {
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
    
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe8q3GKvPKpvelCuW_sHlCqv4qmko-fXq9IXusYjQk_6Qfarw/viewform?usp=pp_url
&entry.274608449=${encodeURIComponent(formData.name)}
&entry.255515796=${encodeURIComponent(formData.email)}
&entry.2103064601=${encodeURIComponent(formData.phone)}
&entry.1569469178=${encodeURIComponent(formData.company)}
&entry.310120251=${encodeURIComponent(formData.message)}`;

    
    window.open(googleFormUrl, '_blank');
    
    toast({
      title: "Form Opened",
      description: "Google Form has been opened in a new tab. Please complete your submission there.",
    });

    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7982265361",
      action: "tel:+917982265361",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "vyapaargroww@gmail.com",
      action: "mailto:vyapaargroww@gmail.com",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Hari Nagar Ashram, New Delhi, Delhi 110014",
      action: "#map",
      gradient: "from-emerald-600 to-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/ca_mansi/",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mansi-gupta-a5aa28232/",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="group flex items-center space-x-6 p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <info.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110`}
                  >
                    <social.icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Google Maps */}
            <div id="map" className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.144763288136!2d77.2504222!3d28.5829221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ea9b1db00b%3A0xfdf0918fdf34fbb0!2sAshram%2C%20New%20Delhi%2C%20Delhi%20110014%2C%20India!5e0!3m2!1sen!2sin!4v1718878765432!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                Submit Query
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
