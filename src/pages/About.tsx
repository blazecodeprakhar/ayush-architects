/**
 * About Page
 * Ayush Architects story, vision, leadership, and founder message
 */

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Eye, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import ayushPortrait from '@/assets/me.webp';
import luxuriousOffice2 from '@/assets/landscape/Luxurious Office (2).jpeg';

const coreValues = [
  {
    icon: Compass,
    title: 'Architectural Creativity',
    description:
      'Blending innovation and structural intelligence to create distinctive, timeless spaces.',
  },
  {
    icon: Eye,
    title: 'Client-Centered Focus',
    description:
      'Understanding your unique lifestyle, requirements, and vision at every stage of the journey.',
  },
  {
    icon: CheckCircle2,
    title: 'Attention to Detail',
    description:
      'From 2D planning to 3D visualization and working execution drawings, perfection is our benchmark.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Quality',
    description:
      'Ensuring strict adherence to regulations, sound structural planning, and seamless site coordination.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ayush Architects | Spaces For Better Tomorrow</title>
        <meta
          name="description"
          content="Ayush Architects is an architecture and design studio creating thoughtful, functional, and distinctive spaces. Led by Ayush, Founder & Principal Architect."
        />
      </Helmet>

      <Layout>
        <PageHeader
          tagline="SPACES FOR BETTER TOMORROW"
          title="About Ayush Architects"
          description="Creating thoughtful, functional, and distinctive spaces where imagination takes form and every space tells a story."
        />

        {/* Founder & Leadership Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card group">
                  <img
                    src={ayushPortrait}
                    alt="Ayush, Founder & Principal Architect"
                    className="w-full h-[480px] lg:h-[580px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-serif text-2xl lg:text-3xl font-medium">Ayush</p>
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">
                      Founder & Principal Architect
                    </p>
                  </div>
                </div>
                {/* Accent decoration */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/40 rounded-3xl -z-10" />
              </motion.div>

              {/* Founder & Studio Content */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <span className="divider-gold" />
                  <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                    Studio Leadership
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
                  Led by Ayush
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-accent font-medium uppercase tracking-widest text-xs mb-8"
                >
                  Ayush Architects
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-5 text-muted-foreground leading-relaxed mb-8 font-light"
                >
                  <p className="text-base sm:text-lg text-foreground/90 font-normal">
                    We combine creativity, functionality, and technical expertise to create
                    spaces that are thoughtfully designed around your needs.
                  </p>
                  <p>
                    From concept to execution, we focus on clear communication, attention to
                    detail, quality, and personalized solutions to turn your vision into a
                    well-designed and functional space.
                  </p>
                  <p>
                    From architectural planning and 3D visualization to interiors, elevations,
                    and execution support, we provide complete design solutions tailored to
                    every client.
                  </p>
                </motion.div>

                {/* Founder's Message Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="bg-card rounded-2xl p-6 border-l-4 border-accent shadow-soft mb-8 relative"
                >
                  <Quote size={28} className="text-accent/30 absolute top-4 right-4" />
                  <p className="text-sm italic text-foreground mb-3 leading-relaxed">
                    "Every project begins with a vision. Our role is to understand it, refine it,
                    and transform it into a space that is functional, meaningful, and uniquely yours."
                  </p>
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    Ayush, Founder & Principal Architect
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="btn-gold inline-flex items-center gap-3 shadow-md"
                  >
                    <span>Connect with Ayush</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & About Us Section */}
        <section className="py-20 lg:py-28 bg-secondary/30 dark:bg-card/40 transition-colors">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <span className="divider-gold" />
                  <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                    OUR VISION
                  </span>
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground"
                >
                  Spaces for a Better Tomorrow
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-foreground/90 leading-relaxed mb-6 font-normal"
                >
                  To create inspiring, functional, and timeless spaces that enhance the way
                  people live and experience their surroundings.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-muted-foreground leading-relaxed font-light mb-8"
                >
                  Ayush Architects is an architecture and design studio creating thoughtful,
                  functional, and distinctive spaces. We believe that true architectural luxury
                  lies in harmonious proportions, enduring materials, and spaces sculpted around
                  human lives.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={luxuriousOffice2}
                  alt="Ayush Architects studio workspace"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="divider-gold inline-block mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground font-light text-base">
                The core architectural principles that guide every sketch, plan, and detail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, index) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
                    className="group bg-card rounded-3xl p-8 border border-border/60 hover:border-accent/60 shadow-soft hover:shadow-xl transition-all duration-400 text-center flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex items-center justify-center mb-6 text-accent shadow-sm"
                    >
                      <Icon size={26} strokeWidth={1.75} />
                    </motion.div>
                    <h3 className="font-serif text-xl font-medium mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#171411] text-stone-100 text-center border-t border-[#312922]">
          <div className="section-container max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-stone-300 text-base sm:text-lg mb-10 font-light leading-relaxed">
              Partner with Ayush Architects for comprehensive planning, 3D visualization, and execution.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-3 shadow-lg">
              <span>Book Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
