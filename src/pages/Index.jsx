import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import { useTheme } from '@/context/ThemeContext';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass bg-primary/90 hover:bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Index = () => {
  const { isDark } = useTheme();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <AboutSection />
      <div className="section-divider" />

      <SkillsSection />
      <div className="section-divider" />

      <ProjectsSection />
      <div className="section-divider" />

      <ContactSection />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-8 bg-background-secondary border-t border-primary/15"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Balaji Praneeth Kamal. Built with React, Three.js, Framer Motion & Tailwind CSS.
          </p>
          <div className="mt-2 text-xs text-primary font-mono">
            Designed & Developed with ❤️ using modern web technologies
          </div>
        </div>
      </motion.footer>

      <ScrollToTop />
    </motion.main>
  );
};

export default Index;