import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
        <section id="about" className="py-24 bg-black transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl shadow-2xl overflow-hidden animate-float">
              <img 
                src="/hedaya.jpg" 
                alt="Sudip Roy - Motion Designer" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2                     className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 transition-colors duration-500">
              Who I Am
            </h2>
            
            <div className="space-y-6 text-lg text-dark-text font-sans leading-relaxed transition-colors duration-500">
              <p>
                Meet <span className="font-bold text-white">SUDIP ROY</span> — your AI-powered motion designer obsessed with turning raw clips into scroll-stopping, thumb-freezing, audience-hooking content. Whether it's Reels, ADS, YouTube, or TikTok, I edit for one thing: making your <span className="font-bold text-white">BRAND</span> look damn good.
              </p>
              
              <p>
                My journey spans across creating engaging content for social media, developing innovative 
                SaaS solutions, and crafting video strategies that turn vibes into visibility.
              </p>
              
              <p>
                While others stick to basic editing, I harness cutting-edge AI platforms like VEO 3, Kling, and Midjourney to create AI-UGC content that transforms your brand into an unstoppable scroll-stopping machine.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['Motion Graphics', 'video edits', 'VIBE.. marketing', 'Brand content', 'AI'].map((skill) => (
                <span 
                  key={skill}
                                    className="px-4 py-2 bg-dark-card backdrop-blur-sm rounded-full text-dark-text font-semibold text-sm border border-dark-border transition-all duration-500"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;