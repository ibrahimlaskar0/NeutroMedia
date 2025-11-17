import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/neon-button';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sudip-roy-48359b237/', 
      color: 'hover:text-blue-500' 
    },
    { 
      icon: Calendar, 
      label: 'Book a 1:1 Call', 
      href: 'https://calendly.com/neutromedia0/30min', 
      color: 'hover:text-green-500' 
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* YC Backed Startups Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pastel-purple/30 via-pastel-pink/30 to-pastel-blue/30 rounded-2xl blur-lg animate-pulse" />
              
              {/* Main highlight box */}
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-2xl px-8 py-6">
                <motion.h3
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(249, 197, 209, 0.5)',
                      '0 0 30px rgba(213, 191, 255, 0.7)',
                      '0 0 20px rgba(207, 224, 232, 0.5)',
                      '0 0 30px rgba(249, 197, 209, 0.7)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue"
                >
                  Worked with multiple YC backed Startups
                </motion.h3>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 transition-colors duration-500">
            Let's Connect
          </h2>
          <p className="text-xl text-dark-text font-sans max-w-2xl mx-auto transition-colors duration-500">
            Ready to bring your ideas to life? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 transition-colors duration-500">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-purple dark:focus:ring-pastel-pink focus:border-transparent transition-all duration-200 font-sans text-deep-navy dark:text-white"
                  placeholder="Neutro"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 transition-colors duration-500">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-purple dark:focus:ring-pastel-pink focus:border-transparent transition-all duration-200 font-sans text-deep-navy dark:text-white"
                  placeholder="neutromedia0@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 transition-colors duration-500">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent transition-all duration-200 font-sans resize-none text-white"
                  placeholder="Tell me about your project, ideas, or how we can collaborate..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="solid"
                size="lg"
                className="w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* CTA */}
            <div className="bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm rounded-2xl p-8 border border-white/60 dark:border-dark-border transition-all duration-500">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-pastel-purple dark:text-pastel-pink mr-3" />
                <h3 className="text-xl font-semibold text-white font-sans transition-colors duration-500">
                  Let's Build Something Together
                </h3>
              </div>
              <p className="text-dark-text-secondary leading-relaxed mb-6 transition-colors duration-500">
                Whether you need a motion graphic that stops the scroll, a SaaS product that solves real problems, 
                or a marketing strategy that turns heads, I'm here to help bring your vision to life.
              </p>
              
              <div className="flex items-center text-sm text-white transition-colors duration-500">
                <Mail className="w-4 h-4 mr-2" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm rounded-2xl p-8 border border-white/60 dark:border-dark-border transition-all duration-500">
              <h3 className="text-xl font-semibold text-white font-sans mb-6 transition-colors duration-500">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center p-4 bg-dark-surface rounded-xl border border-dark-border hover:shadow-lg transition-all duration-200 text-dark-text ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;