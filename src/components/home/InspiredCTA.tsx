/**
 * InspiredCTA Component
 * Mid-page architectural call to action with full dark mode harmony (#171411) and rich animations
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { useTheme } from 'next-themes';
import heroImageLight from '@/assets/hero-living-room.webp';
import heroImageDark from '@/assets/hero-image-dark.webp';

const InspiredCTA = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#171411] text-white border-y border-[#312922]/60">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={isDark ? heroImageDark : heroImageLight}
          alt="Ayush Architects modern architectural space"
          className="w-full h-full object-cover object-center transform scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Consistent dark luxury espresso overlay in both modes */}
        <div className="absolute inset-0 bg-[#171411]/80 dark:bg-[#171411]/85 backdrop-blur-[2px]" />
      </div>

      <div className="section-container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Animated architectural pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-white/10 dark:bg-[#1f1b17]/80 backdrop-blur-md border border-white/20 dark:border-accent/40 shadow-sm"
          >
            <Compass size={13} className="text-accent animate-spin-slow" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
              Curated Architectural Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white drop-shadow-md leading-tight"
          >
            Inspired by What You See?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-sm"
          >
            Explore our comprehensive portfolio to start envisioning the possibilities for your own home or commercial project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group rounded-full overflow-hidden"
            >
              <Link
                to="/portfolio"
                className="btn-gold relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 shadow-xl group text-sm"
              >
                {/* Shimmer light sweep */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 4,
                    duration: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="relative z-10 font-semibold tracking-wider">View Full Portfolio</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InspiredCTA;
