import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection';




import SaasSection from './components/SaasSection';

import VisionSection from './components/VisionSection';
import GetInTouchSection from './components/GetInTouchSection';
import CursorEffect from './components/CursorEffect';
import { useTheme } from './hooks/useTheme';

function App() {
  const { mounted } = useTheme();

  // Prevent flash of unstyled content during hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black transition-colors duration-500 relative">
      <CursorEffect />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <TestimonialsSection />




        <div id="saas-projects">
          <SaasSection />
        </div>

        <VisionSection />
        <GetInTouchSection />
      </div>
    </div>
  );
}

export default App;