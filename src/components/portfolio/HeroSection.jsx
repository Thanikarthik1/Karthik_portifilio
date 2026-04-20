import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import * as THREE from 'three';

/* ── Three.js Particle Sphere (dark mode only) ── */
function ParticleField({ count = 3000 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffd700"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function FloatingStars({ count = 600 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c4b5fd"
        size={0.008}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function DarkHero3D() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <ParticleField />
        <FloatingStars />
      </Canvas>
    </div>
  );
}

/* ── Light mode animated gradient background ── */
function LightHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50" />

      {/* Floating blob shapes */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-blob"
        style={{
          background: 'radial-gradient(circle, hsl(16 80% 62% / 0.4), transparent 70%)',
          top: '-10%',
          right: '-5%',
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-blob"
        style={{
          background: 'radial-gradient(circle, hsl(174 60% 52% / 0.35), transparent 70%)',
          bottom: '-8%',
          left: '-3%',
          animationDelay: '2s',
        }}
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 animate-blob"
        style={{
          background: 'radial-gradient(circle, hsl(258 65% 62% / 0.3), transparent 70%)',
          top: '40%',
          left: '50%',
          animationDelay: '4s',
        }}
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 30% 40%) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}

/* ── Dark mode cosmic background (fallback when Three.js canvas loads) ── */
function DarkCosmicFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-nebula opacity-30" />
      {/* Shooting Stars */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-cosmic-gold rounded-full"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 40}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 4 + Math.random() * 3,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Resume Dropdown ── */
function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const downloadResume = (filename, label) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = label;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group cursor-pointer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        <Download className="w-5 h-5 text-primary group-hover:text-cosmic-gold" />
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 glass rounded-xl p-2 min-w-[200px] z-50"
        >
          <button
            onClick={() => downloadResume('b220036_CS_Softwaredeveloper.pdf')}
            className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
          >
            📄 Software Resume
          </button>
          <button
            onClick={() => downloadResume('Thani_Karthik_Data_Analyst.pdf')}
            className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
          >
            🤖 AI / ML Resume
          </button>
        </motion.div>
      )}
    </div>
  );
}

/* ── Main Hero Section ── */
const HeroSection = () => {
  const { isDark } = useTheme();

  const typewriterText = "AI & Full-Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typewriterText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background — mode-dependent */}
      {isDark ? (
        <>
          <DarkCosmicFallback />
          <DarkHero3D />
        </>
      ) : (
        <LightHeroBackground />
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-4 leading-[1.1]"
          >
            <motion.span
              className="inline-block gradient-text"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              Thani
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              Karthik
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Role + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative inline-block mb-6">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-poppins font-semibold"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-7 bg-primary ml-1 align-middle"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto font-inter leading-relaxed">
              Crafting intelligent solutions through{' '}
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-inter">
              Computer Vision · Deep Learning · Full-Stack Development
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="px-8 py-4 text-lg font-poppins font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View My Work
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-poppins font-semibold border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary rounded-xl transition-all duration-300 group cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex justify-center gap-5"
        >
          <motion.a
            href="https://www.linkedin.com/in/thani-karthik/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:text-nebula-violet" />
          </motion.a>

          <motion.a
            href="https://github.com/Thanikarthik1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-primary group-hover:text-stellar-silver" />
          </motion.a>

          <ResumeDropdown />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;