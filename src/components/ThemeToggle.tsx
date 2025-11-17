import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg w-11 h-11" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-full shadow-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-deep-navy dark:text-white" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;