/**
 * HeroSection Component
 * Crisp, beautifully faded architectural hero background in both light and dark mode
 * ensuring effortless text readability for users.
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { useTheme } from 'next-themes';
import heroImageLight from '@/assets/hero-living-room.webp';
import heroImageDark from '@/assets/hero-image-dark.webp';

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const prevThemeRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && prevThemeRef.current !== undefined && prevThemeRef.current !== resolvedTheme) {
      setIsSwitching(true);
      const timer = setTimeout(() => setIsSwitching(false), 850);
      return () => clearTimeout(timer);
    }
    prevThemeRef.current = resolvedTheme;
  }, [resolvedTheme, mounted]);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0 bg-[#171411] transition-colors duration-700">
        {/* Daylight Room (Light Mode) */}
        <div
          className="absolute inset-0 transition-opacity duration-900 ease-in-out"
          style={{
            opacity: mounted ? (isDark ? 0 : 1) : 1,
            zIndex: isDark ? 1 : 2,
          }}
        >
          <img
            src={heroImageLight}
            alt="Ayush Architects modern daylight interior space"
            className="w-full h-full object-cover object-center transform scale-[1.01]"
          />
          {/* Background Fade in Light Mode: refined subtle fade showcasing room architecture */}
          <div className="absolute inset-0 bg-stone-100/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100/75 via-stone-100/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-100/40 to-transparent pointer-events-none" />
        </div>

        {/* Ambient Night Lights Room (Dark Mode) */}
        <div
          className="absolute inset-0 transition-opacity duration-900 ease-in-out"
          style={{
            opacity: mounted ? (isDark ? 1 : 0) : 0,
            zIndex: isDark ? 2 : 1,
          }}
        >
          <img
            src={heroImageDark}
            alt="Ayush Architects warm ambient architectural lighting"
            className="w-full h-full object-cover object-center transform scale-[1.01]"
          />
          {/* Background Fade in Dark Mode: refined subtle fade showcasing warm room lights */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171411]/80 via-[#171411]/45 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#171411]/50 to-transparent pointer-events-none" />
        </div>

        {/* Realistic Light Switch Filament Flash / Warm Room Bloom Effect */}
        <AnimatePresence>
          {isSwitching && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85, ease: 'easeInOut' }}
              className={`absolute inset-0 z-10 pointer-events-none ${
                isDark
                  ? 'bg-gradient-to-tr from-amber-500/20 via-amber-300/15 to-yellow-100/20 mix-blend-screen'
                  : 'bg-gradient-to-tr from-sky-200/25 via-amber-100/20 to-white/30 mix-blend-screen'
              }`}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-20 section-container pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-2xl">
          {/* Tagline / Subtitle with floating bob animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 flex-wrap"
          >
            <motion.span
              animate={{ y: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-background/90 dark:bg-card/90 border border-accent/40 backdrop-blur-md shadow-sm"
            >
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
                SPACES FOR BETTER TOMORROW
              </span>
            </motion.span>

            {/* Lighting Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-muted-foreground/90 bg-background/70 dark:bg-card/70 backdrop-blur-md border border-border/50">
              <Lightbulb size={11} className={isDark ? 'text-amber-400 fill-amber-400/30' : 'text-stone-400'} />
              <span>{isDark ? 'Evening Lights ON' : 'Daylight ON'}</span>
            </span>
          </motion.div>

          {/* Main Heading without underline and with smooth staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.12] mb-6 text-balance text-foreground drop-shadow-sm"
          >
            Where imagination takes form and every space{' '}
            <motion.span
              animate={{
                textShadow: [
                  '0 0 0px rgba(216,168,61,0)',
                  '0 0 14px rgba(216,168,61,0.35)',
                  '0 0 0px rgba(216,168,61,0)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="italic text-accent"
            >
              tells a story.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-foreground/95 dark:text-foreground/95 leading-relaxed mb-10 max-w-xl font-normal drop-shadow-sm"
          >
            We bring your vision to life through thoughtful architecture that blends
            creativity, functionality, and timeless design, creating meaningful spaces
            that reflect your identity and tell a story of their own.
          </motion.p>

          {/* CTA Buttons with rich hover and shimmer light animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative group rounded-full overflow-hidden"
            >
              <Link
                to="/contact"
                className="btn-gold relative overflow-hidden inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-gold px-8 py-4"
              >
                {/* Shimmer light sweep across button */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="relative z-10 font-semibold tracking-wider">Book Free Consultation</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/portfolio"
                className="rounded-full inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-background/80 dark:bg-[#241e19]/90 backdrop-blur-md border border-foreground/25 dark:border-accent/40 hover:border-accent dark:hover:border-accent hover:bg-accent dark:hover:bg-accent text-foreground dark:text-stone-100 uppercase tracking-widest text-xs sm:text-sm font-medium shadow-sm px-8 py-4 transition-all duration-300 group hover:scale-[1.03] active:scale-[0.97]"
              >
                <span className="transition-colors duration-300 group-hover:text-white dark:group-hover:text-stone-950 font-medium">Our Work</span>
                <span className="text-accent transition-all duration-300 group-hover:text-white dark:group-hover:text-stone-950 group-hover:translate-x-1.5">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator with floating pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/75 font-medium drop-shadow-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1 h-6 rounded-full bg-accent/80 shadow-sm"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
