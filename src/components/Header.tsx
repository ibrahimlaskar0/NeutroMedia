import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/neon-button';
import logo from "../assets/logo neutro.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update isScrolled for styling
      setIsScrolled(currentScrollY > 20);
      
      // Handle visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className={`fixed top-2 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/20 border border-white/10' 
          : 'backdrop-blur-sm bg-black/10 border border-white/5'
      }`}
    >
      <nav className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">Sudip Roy</span> */}
              <img src={logo} alt="Logo" className="h-12"/>
            </div>
          </motion.div>

          {/* All Navigation Elements on the Right */}
          <div className="flex items-center space-x-3">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-3">
              {[
                { name: 'About', id: 'testimonials', type: 'scroll' },
                { name: 'Projects', id: 'saas-projects', type: 'scroll' },
                { name: 'Pricing', id: 'pricing', type: 'scroll' },
                { name: 'Contact', id: 'https://calendly.com/neutromedia0/30min', type: 'link' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.type === 'link' ? window.open(item.id, '_blank') : scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer px-3 py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('get-in-touch')}
              variant="default"
              className="text-white font-semibold shadow-lg"
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;