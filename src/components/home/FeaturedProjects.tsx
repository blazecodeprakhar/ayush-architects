/**
 * FeaturedProjects Component
 * Elegant carousel gallery with centered active image and enhanced animations
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SwipeGallery from '../SwipeGallery/SwipeGallery';

const FeaturedProjects = () => {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-secondary/20 dark:bg-card/20 transition-colors">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
              Visual Journey
            </span>
            <span className="divider-gold" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground"
          >
            Step Into A World Where Every Frame Captures The Essence Of <span className="italic text-accent">Beauty</span> And Innovation
          </motion.h2>
        </div>
      </div>

      {/* Swipe Gallery */}
      <div className="relative px-0 md:px-8 w-full flex justify-center">
        <SwipeGallery />
      </div>

      {/* View All CTA with interactive hover physics */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/portfolio"
              className="btn-outline-elegant inline-flex items-center gap-3 px-8 py-3.5 group shadow-sm hover:border-accent hover:text-accent"
            >
              <span className="font-medium tracking-wider">View Full Portfolio</span>
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5 text-accent" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
