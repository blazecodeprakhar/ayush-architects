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
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-stone-100 to-stone-200/50 dark:from-[#171411] dark:via-[#1c1814] dark:to-[#171411] border-b border-border/40 transition-colors duration-500">
      <div className="section-container text-center">
        {displayTag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              {displayTag}
            </span>
            <span className="divider-gold" />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
