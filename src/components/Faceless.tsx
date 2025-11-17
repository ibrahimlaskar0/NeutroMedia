import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Faceless = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const youtubeShorts = [
    'https://www.youtube.com/embed/bK8fclqOeu8',
    'https://www.youtube.com/embed/Y_ERF_UzILE',
    'https://www.youtube.com/embed/1EiQiaw3gzk',
    'https://www.youtube.com/embed/H0Pv0RkNHk0',
    'https://www.youtube.com/embed/ryHpsMJEaKs',
    'https://www.youtube.com/embed/19lLsAyUQIY'
  ];

  return (
    <section id="motion-work" className="py-24 bg-black text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Faceless Videos
          </h2>
          <p className="text-xl text-gray-300 font-sans max-w-2xl mx-auto">
            Every frame tells a story. Here's how I bring ideas to life through motion.
          </p>
        </motion.div>

        {/* Mission Statement - Right Aligned */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-right mb-16 max-w-2xl ml-auto"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-pastel-pink">
            My mission?
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed font-sans">
            Elevate your brand to the visual standards of industry giants using technology that's reshaping content creation forever.
          </p>
        </motion.div>

        {/* YouTube Shorts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeShorts.map((embedUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700/50">
                {/* YouTube Short Embed */}
                <div className="relative aspect-[9/16] bg-black">
                  <iframe
                    src={`${embedUrl}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1`}
                    title={`YouTube Short ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faceless;