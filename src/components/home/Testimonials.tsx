/**
 * Testimonials Component
 * Client reviews with elegant styling for Ayush Architects
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Mehta',
    role: 'Villa Owner, South Extension',
    content:
      'Ayush Architects turned our property into a space we absolutely adore. Ayush understood our family’s vision from the very first meeting and translated it into functional, timeless architecture that exceeds all our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh & Sunita Verma',
    role: 'Modern Residence, GK-II',
    content:
      "Working with Ayush was a game-changer. They managed to create a residential layout with extraordinary natural light, seamless space planning, and contemporary elevations. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Malhotra',
    role: 'Commercial Project, Gurugram',
    content:
      'The 3D visualization and detailed 2D working drawings were exceptional. We could clearly visualize the facade and interiors before construction, and execution was seamless with contractor coordination.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 dark:bg-card/30 transition-colors">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Testimonials
            </span>
            <span className="divider-gold" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-16 text-foreground"
          >
            What Our Clients Say
          </motion.h2>

          {/* Testimonial Card */}
          <div className="relative mt-12">
            {/* Watermark Quote Icon with continuous floating animation */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 -z-10 pointer-events-none"
            >
              <Quote size={120} className="text-accent/10 fill-accent/5" />
            </motion.div>

            <div className="relative z-10 min-h-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 25, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Rating Stars with staggered spring pop-in */}
                  <div className="flex justify-center gap-1.5 mb-8">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.07, type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Star size={18} className="fill-accent text-accent drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="max-w-3xl mx-auto font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed text-foreground/90 mb-8 italic font-normal">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Details */}
                  <div className="text-center">
                    <div className="font-serif text-lg font-medium text-foreground tracking-wide mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation - Circular Buttons & Dots with spring feedback */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="group w-12 h-12 rounded-full border border-border/80 bg-background/80 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-foreground group-hover:text-white transition-colors" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      index === currentIndex
                        ? 'w-8 bg-accent shadow-sm'
                        : 'w-2 bg-border hover:bg-accent/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="group w-12 h-12 rounded-full border border-border/80 bg-background/80 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-foreground group-hover:text-white transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
