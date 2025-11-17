import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Sparkles, Layers, Monitor, Cpu, Brush, Rocket } from 'lucide-react';

const SaasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const wistiaVideos = [
    { mediaId: 'viq1evrw4h', aspect: '0.5625' },
    { mediaId: '8z10o2x1d1', aspect: '0.5625' },
    { mediaId: 'ju1mokk26k', aspect: '0.5625' },
    { mediaId: 'e835s9cctg', aspect: '0.5625' },
    { mediaId: '98nilq8n3p', aspect: '0.5625' },
    { mediaId: '3ru7w4jupx', aspect: '0.5633802816901409' },
    { mediaId: 'udvrrkrdc5', aspect: '0.5625' },
    { mediaId: '939ddqxgf4', aspect: '0.5625' },
    { mediaId: '53lneehtbg', aspect: '0.5625' }
  ];

  // Enhanced floating elements for the right side
  const floatingElements = [
    { icon: Code, delay: 0, duration: 8, x: '75%', y: '25%', size: 'w-10 h-10' },
    { icon: Palette, delay: 2, duration: 10, x: '85%', y: '45%', size: 'w-8 h-8' },
    { icon: Zap, delay: 4, duration: 12, x: '70%', y: '65%', size: 'w-12 h-12' },
    { icon: Sparkles, delay: 1, duration: 9, x: '90%', y: '35%', size: 'w-6 h-6' },
    { icon: Layers, delay: 3, duration: 11, x: '80%', y: '15%', size: 'w-9 h-9' },
    { icon: Monitor, delay: 5, duration: 7, x: '95%', y: '55%', size: 'w-7 h-7' },
    { icon: Cpu, delay: 6, duration: 13, x: '78%', y: '75%', size: 'w-8 h-8' },
    { icon: Brush, delay: 2.5, duration: 9, x: '88%', y: '25%', size: 'w-6 h-6' },
    { icon: Rocket, delay: 7, duration: 14, x: '72%', y: '85%', size: 'w-10 h-10' },
  ];

  // Particle system for ambient animation
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 15 + (i % 5),
    x: 70 + (i % 4) * 7,
    y: 20 + (i % 6) * 12,
    size: 2 + (i % 3),
  }));

  return (
    <section className="py-24 bg-black transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main floating icons */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { 
                opacity: [0, 0.15, 0.08, 0.12, 0.06],
                scale: [0, 1, 1.2, 0.9, 1.1, 1],
                y: [0, -25, 5, -15, 0],
                x: [0, 10, -5, 8, 0],
                rotate: [0, 15, -10, 5, 0]
              } : {}}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{ left: element.x, top: element.y }}
            >
              <div className={`${element.size} bg-gradient-to-br from-pastel-purple/25 to-pastel-blue/25 dark:from-pastel-pink/15 dark:to-pastel-purple/15 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-white/15 flex items-center justify-center shadow-lg`}>
                <IconComponent className={`w-${Math.max(4, parseInt(element.size.match(/\d+/)?.[0] || '8') - 2)} h-${Math.max(4, parseInt(element.size.match(/\d+/)?.[0] || '8') - 2)} text-deep-navy/40 dark:text-white/30`} />
              </div>
            </motion.div>
          );
        })}

        {/* Ambient particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              opacity: [0, 0.3, 0.1, 0.2, 0],
              scale: [0, 1, 0.8, 1.2, 0.6],
              y: [0, -40, 10, -20, 0],
              x: [0, 15, -8, 12, 0],
            } : {}}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-gradient-to-br from-pastel-purple/20 to-pastel-blue/20 dark:from-pastel-pink/10 dark:to-pastel-purple/10"
            style={{ 
              left: `${particle.x}%`, 
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}

        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 0.9, 1.2, 1],
            opacity: [0.05, 0.15, 0.08, 0.12, 0.05],
            rotate: [0, 120, 240, 360],
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 10, -8, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-pastel-purple/15 to-pastel-pink/15 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 0.8, 1.3, 1],
            opacity: [0.03, 0.12, 0.06, 0.1, 0.03],
            rotate: [360, 240, 120, 0],
            x: [0, -25, 15, -20, 0],
            y: [0, 20, -12, 18, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-gradient-to-br from-pastel-blue/12 to-pastel-green/12 rounded-full blur-2xl"
        />

        {/* Geometric shapes with enhanced movement */}
        <motion.div
          animate={{
            y: [0, -35, 15, -25, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.08, 0.15, 0.05, 0.12, 0.08],
            scale: [1, 1.2, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 right-1/6 w-10 h-10 bg-pastel-purple/25 dark:bg-pastel-pink/15 transform rotate-45 rounded-lg"
        />

        <motion.div
          animate={{
            x: [0, 30, -15, 25, 0],
            y: [0, -20, 12, -15, 0],
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.1, 0.2, 0.06, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 right-1/8 w-8 h-8 bg-pastel-blue/25 dark:bg-pastel-purple/15 rounded-full shadow-lg"
        />

        {/* Connecting lines with flow animation */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0.5, 1, 0],
            opacity: [0, 0.15, 0.05, 0.1, 0],
            rotate: [0, 15, -10, 20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/3 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-pastel-purple/30 to-transparent transform rotate-45 rounded-full"
        />

        <motion.div
          animate={{
            scaleY: [0, 1, 0.3, 1, 0],
            opacity: [0, 0.12, 0.04, 0.08, 0],
            rotate: [0, -20, 10, -15, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/2 right-1/3 w-0.5 h-24 bg-gradient-to-b from-transparent via-pastel-blue/25 to-transparent rounded-full"
        />

        {/* Pulsing accent elements */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1, 1.3, 1],
            opacity: [0.1, 0.25, 0.05, 0.18, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/5 right-1/12 w-6 h-6 bg-gradient-to-br from-pastel-pink/30 to-pastel-orange/30 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Services Label */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium text-white tracking-wide uppercase">Services</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Short form videos
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl mx-auto">
            Shorts that reach more. Reels that stick.
          </p>
        </motion.div>

        {/* Video Grid - 3 Columns, Smaller & Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {wistiaVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group cursor-pointer relative"
              >
                {/* Enhanced Hover Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pastel-purple/30 to-pastel-blue/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700/50 group-hover:border-pastel-purple/30">
                  {/* Wistia Video Embed */}
                  <div className="relative aspect-[9/16] bg-black">
                    <wistia-player 
                      media-id={video.mediaId} 
                      aspect={video.aspect} 
                      className="w-full h-full"
                    ></wistia-player>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Priority Statement */}

      </div>
    </section>
  );
};

export default SaasSection;