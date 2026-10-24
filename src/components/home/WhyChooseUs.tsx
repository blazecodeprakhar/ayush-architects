/**
 * WhyChooseUs Component
 * Prestigious trust, experience, and leadership statement for Ayush Architects
 * Rich dark architectural tone matching #171411
 */

import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, CheckCircle2 } from 'lucide-react';
import projectBedroom from '@/assets/project-bedroom.webp';

const stats = [
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '250+', label: 'Built Spaces' },
  { icon: Award, value: '12+', label: 'Core Services' },
  { icon: Star, value: '100%', label: 'Commitment' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#171411] text-stone-100 overflow-hidden border-y border-stone-800/50 transition-colors duration-500">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="divider-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                Why Choose Ayush Architects
              </span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-white"
            >
              Experience Thoughtful &{' '}
              <span className="italic text-accent">Distinctive</span> Architecture
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-300 leading-relaxed mb-8 text-base font-light"
            >
              Led by Ayush, We combine creativity, functionality, and technical expertise
              to create spaces that are thoughtfully designed around your needs. From concept
              to execution, we focus on clear communication, attention to detail, quality,
              and personalized solutions to turn your vision into a well-designed and functional space.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3.5 mb-10 text-sm font-light text-stone-300"
            >
              {[
                'Tailored architectural planning & realistic 3D visualization',
                'Comprehensive 2D working drawings & structural safety coordination',
                'End-to-end interior design and facade styling',
                'Transparent communication and rigorous on-site coordination',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-stone-800/80"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="text-center p-2 rounded-2xl transition-colors hover:bg-stone-800/40 cursor-default"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="font-serif text-2xl lg:text-3xl font-medium text-accent">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image with modern rounded corners */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50">
              <img
                src={projectBedroom}
                alt="Ayush Architects design showcase"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge with smooth continuous hovering motion */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-accent text-accent-foreground p-6 rounded-3xl shadow-gold backdrop-blur-md"
            >
              <div className="font-serif text-3xl font-medium">10+</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Years of Architectural Vision</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
