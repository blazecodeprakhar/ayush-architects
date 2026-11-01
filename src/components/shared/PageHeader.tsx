/**
 * PageHeader Component
 * Reusable hero header for internal pages for Ayush Architects
 * Fully optimized for both light mode and #171411 dark mode.
 */

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
}

const PageHeader = ({ title, subtitle, tagline, description }: PageHeaderProps) => {
  const displayTag = tagline || subtitle;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-stone-100 to-stone-200/50 dark:from-[#171411] dark:via-[#1c1814] dark:to-[#171411] border-b border-border/40 transition-colors duration-500">
      {/* Ambient ethereal glow behind page title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-accent/8 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="relative z-10 section-container text-center">
        {displayTag && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="h-0.5 bg-accent"
            />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              {displayTag}
            </span>
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="h-0.5 bg-accent"
            />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground tracking-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
