import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Calendar, Instagram, Twitter } from 'lucide-react';

const GetInTouchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=neutromedia0@gmail.com',
      color: 'hover:text-blue-400',
      description: 'Drop me a line'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ibrahim-laskar-229013266/',
      color: 'hover:text-blue-500',
      description: 'Connect professionally'
    },
    {
      icon: Twitter,
      label: 'X',
      href: 'https://x.com/FlickerEditor',
      color: 'hover:text-blue-400',
      description: 'Follow on X'
    },
    {
      icon: Calendar,
      label: 'Schedule a Call',
      href: 'https://calendly.com/neutromedia0/30min',
      color: 'hover:text-green-500',
      description: 'Book a 1:1 meeting'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/flicker_editor01/',
      color: 'hover:text-pink-500',
      description: 'Follow my journey'
    }
  ];

  return (
    <section id="get-in-touch" className="py-24 bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 transition-colors duration-500">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto transition-colors duration-500">
            Ready to collaborate? Let's connect and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="relative mb-3">
                    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20 rounded-full flex items-center justify-center group-hover:from-pastel-purple/30 group-hover:to-pastel-pink/30 transition-all duration-300">
                      <IconComponent className={`w-5 h-5 text-white ${social.color} transition-colors duration-300`} />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-10 h-10 mx-auto bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-1 font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pastel-purple group-hover:to-pastel-pink transition-all duration-300">
                    {social.label}
                  </h3>
                  
                  <p className="text-gray-400 text-xs transition-colors duration-300 group-hover:text-gray-300">
                    {social.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-pastel-purple to-pastel-pink mx-auto transition-all duration-300 rounded-full" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4 font-serif">
              Let's Build Something Together
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Whether you need a motion graphic that stops the scroll, a SaaS product that solves real problems, 
              or a marketing strategy that turns heads, I'm here to help bring your vision to life.
            </p>
            
            <div className="flex items-center justify-center mt-6 text-sm text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchSection;