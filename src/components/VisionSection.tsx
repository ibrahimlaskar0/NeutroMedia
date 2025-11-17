import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const pricingTiers = [
    {
      name: "Starter",
      price: "$699",
      color: "from-gray-900 to-gray-800",
      borderColor: "border-gray-600",
      textColor: "text-white",
      features: [
        "12 video credits",
        "1 month validity",
        "Unlimited revisions",
        "Personalized video branding", 
        "Average 1 - 2 days turn around"
      ]
    },
    {
      name: "Growth",
      price: "$1398",
      color: "from-gray-700 to-gray-600",
      borderColor: "border-gray-400",
      textColor: "text-white",
      popular: true,
      features: [
        "25 video credits",
        "2 months validity",
        "Unlimited revisions",
        "Personalized video branding",
        "Average 1 - 2 days turn around"
      ]
    },
    {
      name: "Ultimate",
      price: "$2447",
      color: "from-amber-600 to-amber-500",
      borderColor: "border-amber-400",
      textColor: "text-white",
      features: [
        "45 video credits",
        "3 months validity",
        "Unlimited revisions",
        "Personalized video branding",
        "Average 1 - 2 days turn around"
      ]
    }
  ];

  const additionalOptions = [
    {
      title: "One-off Video ($30)",
      description: "Perfect for testing our service or one-time projects",
      buttonText: "Get Started Now"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Pricing Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium text-white tracking-wide uppercase">Pricing & Plans</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            No Monthly Retainers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Pick your credits once and stay flexible — they're yours to use over the next 6 months.
          </motion.p>

          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-2xl p-8 border-2 ${tier.borderColor} bg-gradient-to-br ${tier.color} backdrop-blur-sm`}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
                </div>
                
                <a href="https://calendly.com/neutromedia0/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 mb-8 border border-white/20 hover:border-white/40">
                    Get Started Now
                  </button>
                </a>

                <div className="text-left">
                  <p className="text-white/80 font-medium mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Options */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center max-w-4xl mx-auto"
          >
            {additionalOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center backdrop-blur-sm max-w-md"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-6">{option.description}</p>
                <a href="https://calendly.com/neutromedia0/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40">
                    {option.buttonText}
                  </button>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;