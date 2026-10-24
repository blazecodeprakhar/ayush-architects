/**
 * ProcessSection Component
 * Visualizing the architectural design workflow for Ayush Architects
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Eye, Layers, CheckCircle2 } from 'lucide-react';

const highlightedSteps = [
  {
    step: '01',
    title: 'Consultation & Understanding',
    description:
      'We begin by understanding your requirements, ideas, lifestyle, budget, site conditions, and project goals.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Site Study & Analysis',
    description:
      'We study dimensions, surroundings, solar orientation, access, and regulations influencing the design.',
    icon: Eye,
  },
  {
    step: '03',
    title: 'Concept & 3D Visualization',
    description:
      'We develop creative architectural concepts, detailed floor plans, and realistic 3D renders before execution.',
    icon: Layers,
  },
  {
    step: '04',
    title: 'Execution & Final Reveal',
    description:
      'We provide working drawings, coordinate construction quality, and deliver your completed dream space.',
    icon: CheckCircle2,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              OUR DESIGN PROCESS
            </span>
            <span className="divider-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground"
          >
            From Vision to Built Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light"
          >
            Our systematic, client-centered approach ensures every phase of your architectural
            journey is transparent, precise, and inspiring.
          </motion.p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {highlightedSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/60 hover:border-accent/40 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-12 h-12 rounded-full bg-secondary dark:bg-muted/50 text-accent flex items-center justify-center font-serif text-lg font-medium group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                      {item.step}
                    </span>
                    <Icon size={22} className="text-muted-foreground/60 group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/30 flex items-center text-[11px] uppercase tracking-wider text-accent font-medium">
                  <span>Phase {index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Complete 10-step process CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/services"
              className="btn-outline-elegant inline-flex items-center gap-2.5 px-8 py-3.5 group shadow-sm hover:border-accent hover:text-accent"
            >
              <span className="font-medium tracking-wider">View Full 10-Step Design Process</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5 text-accent" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
