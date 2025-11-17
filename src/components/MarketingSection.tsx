import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const caseStudies = [
    {
      title: "AI - UGC",
      subtitle: "From concept to campaign in hours, not weeks",
      videoUrl: "https://player.vimeo.com/video/1098456772",
      type: "video"
    },
    {
      title: "Brand Product Shoot AI- powered",
      subtitle: "Impressions that rival 100-thousand-dollar productions",
      videoUrl: "https://player.vimeo.com/video/1098456838",
      type: "video"
    },
    {
      title: "AI-Commercial Photography",
      subtitle: "Slash production costs by 50%+ without sacrificing impact",
      videoUrl: "https://player.vimeo.com/video/1098456866",
      type: "video"
    },
    {
      title: "Healthcare Brand AI- Poster",
      subtitle: "Healthcare Trust Campaign",
      description: "Built credibility for a wellness startup through authentic stories and medical professional endorsements.",
      imageUrl: "/healthcare-brand-poster.jpg",
      type: "image"
    },
    {
      title: "Hair Serum AI-UGC Poster",
      subtitle: "Beauty Transformation Series",
      description: "Showcased real results through authentic before-and-after content that drove organic viral growth.",
      imageUrl: "/hair-serum-ugc-poster.jpg",
      type: "image"
    }
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple to-pastel-blue" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 transition-colors duration-500">
            Turning Vibes into Visibility
          </h2>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans transition-colors duration-500">
            Where AI Meets Authenticity, The Future of Content is Here
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                    {study.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed transition-colors duration-500 font-serif">
                    {study.subtitle}
                  </p>
                </div>
                
                {/* Description for image-based case studies */}
                {study.description && (
                  <p className="text-lg text-gray-300 leading-relaxed transition-colors duration-500">
                    {study.description}
                  </p>
                )}
              </div>
              
              {/* Media Content */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {study.type === 'video' ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <iframe
                      src={`${study.videoUrl}?autoplay=1&muted=1&loop=1&background=1`}
                      title={study.title}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;