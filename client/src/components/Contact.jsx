import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiHome } from 'react-icons/hi';
import { BsMoon, BsSun } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = ({ setActiveSection, isDarkMode, setIsDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_igzfd1t';
      const templateId = 'template_acv10ks';
      const publicKey = 'Gy-VLi_oqgvhQi9TN';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'New Contact Form Message',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: isDarkMode ? '#1e293b' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
        },
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Server timeout. Please send manually to deepdey715@gmail.com', {
        duration: 6000,
        position: 'top-center',
        style: {
          background: isDarkMode ? '#1e293b' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: HiMail, text: 'deepdey715@gmail.com', href: 'mailto:deepdey715@gmail.com' },
    { icon: HiPhone, text: '+91 9399315449', href: 'tel:+919399315449' },
    { icon: HiLocationMarker, text: 'Jaipur, India', href: '#' },
  ];

  return (
    <section className={`min-h-screen flex flex-col px-4 md:px-12 py-6 md:py-8 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Toast Notifications */}
      <Toaster />
      
      {/* Go Home Button */}
      <div className="mb-3 md:mb-4">
        <button
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white text-sm md:text-base rounded-lg hover:bg-secondary transition-all duration-300"
        >
          <HiHome size={20} />
          Go Home
        </button>
      </div>

      {/* Contact Content */}
      <div className="flex-1 flex items-center justify-center pb-16">
        <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Contact Info - Order 2 on mobile, 1 on desktop */}
            <div className="order-2 md:order-1">
              <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-primary'}`}>Let's Connect</h3>
              <p className={`text-base md:text-lg mb-6 md:mb-8 ${isDarkMode ? 'text-gray-300' : 'text-accent'}`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 transition-colors group ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-accent hover:text-primary'}`}
                  >
                    <div className="p-3 bg-white rounded-lg group-hover:bg-primary transition-colors">
                      <info.icon size={24} className="group-hover:text-white" />
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form - Order 1 on mobile, 2 on desktop */}
            <div className="card order-1 md:order-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-primary font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-primary font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-primary font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? '⏳ Sending...' : 'Send Message'}
                </button>
                
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 right-4 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 z-50 border border-gray-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <BsSun size={16} className="text-primary" /> : <BsMoon size={16} className="text-primary" />}
      </button>
    </section>
  );
};

export default Contact;
