/**
 * ServicesOverview Component
 * Curated architectural and design services for Ayush Architects with rich animations
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, FileText, Box, Maximize2, Home, Building2, ArrowRight } from 'lucide-react';
import { serviceImages } from '@/assets/services';

const featuredServices = [
  {
    icon: Compass,
    num: '01',
    title: 'Architectural Planning',
    image: serviceImages['Architectural Planning'],
    description:
      'Complete architectural planning and design solutions for residential, commercial, and institutional projects.',
  },
  {
    icon: FileText,
    num: '02',
    title: '2D Floor Plans & Drawings',
    image: serviceImages['2D Floor Plans & Drawings'],
    description:
      'Detailed 2D floor plans, working drawings, furniture layouts, and construction drawings as per project requirements.',
  },
  {
    icon: Box,
    num: '03',
    title: '3D Visualization',
    image: serviceImages['3D Visualization'],
    description:
      'Realistic 3D models and renders to help you visualize your project before construction begins.',
  },
  {
    icon: Maximize2,
    num: '04',
    title: 'Space Planning',
    image: serviceImages['Space Planning'],
    description:
      'Efficient planning of spaces with a focus on functionality, circulation, comfort, and aesthetics.',
  },
  {
    icon: Home,
    num: '05',
    title: 'Interior Design',
    image: serviceImages['Interior Design'],
    description:
      'Complete interior design solutions including furniture layouts, material selection, lighting, finishes, and interior drawings.',
  },
  {
    icon: Building2,
    num: '06',
    title: 'Facade & Elevation Design',
    image: serviceImages['Facade & Elevation Design'],
    description:
      'Modern and functional facade and elevation designs that enhance the appearance and character of your building.',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 dark:bg-card/40 transition-colors">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              What We Do
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
            Our Architecture & Design Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light"
          >
            From conceptual planning to detailed execution drawings, we provide end-to-end
            solutions tailored to every client and project.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            const serviceImage = service.image || serviceImages[service.title];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card/90 dark:bg-card/70 backdrop-blur-sm rounded-3xl border border-border/60 hover:border-accent/40 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Landscape Image in 16:9 ratio */}
                  <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
                    <img
                      src={serviceImage}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-black/20 pointer-events-none" />
                  </div>

                  <div className="p-7 sm:p-8">
                    {/* Top Bar with Number and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-secondary dark:bg-muted/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <Icon size={26} strokeWidth={1.75} />
                      </div>
                      <span className="text-2xl font-serif text-muted-foreground/30 font-medium group-hover:text-accent/50 transition-colors">
                        {service.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium mb-3 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
                  <Link
                    to="/services"
                    className="pt-4 border-t border-border/40 flex items-center text-xs uppercase tracking-widest text-accent font-medium group-hover:gap-2 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All 12 Services CTA with bounce animation */}
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
              className="btn-gold inline-flex items-center gap-3 shadow-md hover:shadow-gold px-8 py-4 group"
            >
              <span className="font-semibold tracking-wider">Explore All 12 Services</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
