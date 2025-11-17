import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  // Always default to dark theme
  return 'dark';
};

export const useTheme = () => {
  const [theme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Always apply dark theme
    root.classList.remove('light');
    root.classList.add('dark');
    
    // Set data attribute for styling hooks
    root.setAttribute('data-theme', 'dark');
  }, [mounted]);

  return { theme, mounted };
};