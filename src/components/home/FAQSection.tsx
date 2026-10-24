/**
 * FAQSection Component
 * Common architectural questions accordion with rounded corners and smooth animation
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'What architectural and planning services does Ayush Architects provide?',
    answer:
      'We provide complete end-to-end solutions including architectural planning, 2D floor plans & construction drawings, 3D visualization, structural planning, facade & elevation design, and on-site execution coordination.',
  },
  {
    question: 'How do you approach a new project design?',
    answer:
      'We follow our structured 10-step design process: starting from Consultation & Understanding and Site Study to Concept Development, 2D/3D Visualization, Working Drawings, and on-site Execution Review.',
  },
  {
    question: 'Do you offer 3D visualizations before starting construction?',
    answer:
      'Yes, realistic 3D visualizations and renders are provided so you can understand proposed spaces, materials, colors, and spatial harmony before execution starts.',
  },
  {
    question: 'Can you handle both residential and commercial projects?',
    answer:
      'Absolutely. Ayush Architects creates thoughtful, functional, and distinctive spaces for residential residences, villas, commercial spaces, and renovations.',
  },
  {
    question: 'How do we get started with a consultation?',
    answer:
      'Simply reach out via our contact page or call us directly. We will schedule an initial consultation to understand your requirements, site conditions, and project goals.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-card/40 transition-colors">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Header */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="divider-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                Clarification
              </span>
              <span className="divider-gold" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-8 font-light leading-relaxed"
            >
              Have a question about our architectural design process? If you need personalized guidance, our team is always here to assist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="btn-outline-elegant inline-flex items-center gap-2 group"
              >
                <span>Speak with an Architect</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Accordion with rounded-2xl cards */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-background border border-border/60 rounded-2xl overflow-hidden shadow-soft transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/5 transition-colors duration-300"
                  >
                    <span
                      className={`font-serif text-lg pr-6 transition-colors duration-200 ${
                        openIndex === index ? 'text-accent font-medium' : 'text-foreground font-normal'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        openIndex === index
                          ? 'border-accent bg-accent text-accent-foreground rotate-180'
                          : 'border-border/80 text-muted-foreground'
                      }`}
                    >
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed font-light border-t border-border/30 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
