import { motion } from 'framer-motion';
import { ChevronUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/neon-button';
import logo from "../assets/logo neutro.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', id: 'testimonials', type: 'scroll' },
    { label: 'Motion Work', id: 'motion-work', type: 'scroll' },
    { label: 'SaaS Projects', id: 'saas-projects', type: 'scroll' },
    { label: 'Contact', id: 'https://calendly.com/neutromedia0/30min', type: 'link' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden py-12 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple to-pastel-blue" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand & Copyright */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <img src={logo} alt="Logo" className="h-12"/>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed max-w-xs transition-colors duration-500"
            >
              Crafting impactful stories through motion and strategic marketing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-sm text-gray-400 transition-colors duration-500"
            >
              <span>© 2025 Sudip Roy. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>& lots of coffee</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-semibold text-lg font-sans"
            >
              Quick Links
            </motion.h3>
            
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={() => link.type === 'link' ? window.open(link.id, '_blank') : scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 space-x-2"
            >
              <ChevronUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm transition-colors duration-500">
            All rights reserved. This portfolio showcases work created with passion and precision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;