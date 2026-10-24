/**
 * CTASection Component
 * Call-to-action section for Ayush Architects consultation booking with rich animations
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { useTheme } from 'next-themes';
import heroImageLight from '@/assets/hero-living-room.jpg';
import heroImageDark from '@/assets/hero-image-dark.png';

const CTASection = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#171411] border-t border-[#312922]/50">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={isDark ? heroImageDark : heroImageLight}
          alt="Ayush Architects design space"
          className="w-full h-full object-cover object-center transform scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[#171411]/80 dark:bg-[#171411]/85 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">
            SPACES FOR BETTER TOMORROW
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 max-w-3xl mx-auto"
        >
          Where Imagination Takes Form
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Ready to transform your vision into an inspiring reality? Schedule an architectural consultation with Ayush Architects today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="btn-gold relative overflow-hidden inline-flex items-center gap-3 shadow-xl group text-sm px-8 py-4"
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
              <span className="relative z-10 font-semibold tracking-wider">Book Consultation</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/portfolio"
              className="rounded-full border border-white/30 text-white px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm inline-block shadow-md"
            >
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
