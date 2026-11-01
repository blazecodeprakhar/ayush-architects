/**
 * Portfolio Page
 * Project gallery showcasing interior design projects
 */

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Import project images
import sangamPavalion from '@/assets/landscape/Dome Pavalion.png';
import pavalionInteriors from '@/assets/landscape/Pavalion Hall.jpeg';
import classicMansion from '@/assets/landscape/Classical Mansion.jpeg';
import modernKindergarden from '@/assets/landscape/Modern Kindergarden.jpeg';
import luxuriousOffice from '@/assets/landscape/Luxurious Office.jpeg';
import modernResidence from '@/assets/landscape/MODERN HOUSE.png';

const projects = [
  {
    id: 1,
    title: 'Sangam Pavalion',
    category: 'Pavilion Architecture',
    location: 'Cultural Zone',
    image: sangamPavalion,
    description: 'A sculptural dome pavilion that blends organic architecture, natural light, and serene landscaped spaces to create a harmonious connection between nature and design.',
  },
  {
    id: 2,
    title: 'Pavalion Interiors',
    category: 'Interior Design',
    location: 'Exhibition Hall',
    image: pavalionInteriors,
    description: 'The interiors feature warm ambient lighting, fluid spatial forms, and a minimalist material palette, creating a tranquil and immersive atmosphere that complements the pavilion’s organic architecture.',
  },
  {
    id: 3,
    title: 'Classic Mansion',
    category: 'Luxury Architecture',
    location: 'Private Grounds',
    image: classicMansion,
    description: 'A timeless classical mansion featuring elegant symmetry, pitched roofs, arched windows, and refined detailing, reflecting grandeur and traditional architectural charm.',
  },
  {
    id: 4,
    title: 'Modern Kindergarden',
    category: 'Educational',
    location: 'Urban Campus',
    image: modernKindergarden,
    description: 'A contemporary kindergarten designed with playful outdoor spaces, interactive landscapes, and child-friendly architecture, fostering creativity, exploration, and joyful learning.',
  },
  {
    id: 5,
    title: 'Luxurious Office',
    category: 'Home Office',
    location: 'Tribeca, NY',
    image: luxuriousOffice,
    description: 'Inspiring workspace combining productivity with style. Built-in shelving and leather accents create a distinguished atmosphere.',
  },
  {
    id: 6,
    title: 'Modern Luxury Residence',
    category: 'Residential',
    location: 'Private Estate',
    image: modernResidence,
    description: 'A contemporary luxury residence featuring clean geometric volumes, expansive terraces, elegant material contrasts, and minimalist detailing, creating a sophisticated blend of modern design and comfort.',
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Ayush Architects | Built Work & Design Gallery</title>
        <meta
          name="description"
          content="Explore the architecture and interior design portfolio of Ayush Architects. Built work combining creativity, functionality, and timeless design."
        />
      </Helmet>

      <Layout>
        {/* Custom Premium Header */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
          <div className="section-container text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent/60"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">AYUSH ARCHITECTS • SPACES FOR BETTER TOMORROW</span>
                <div className="h-px w-12 bg-accent/60"></div>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 text-foreground">
                Our Portfolio
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Explore our collection of transformed spaces, where timeless elegance meets modern functionality in every detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <Link to="/contact" className="block flex-grow">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-muted shadow-soft">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-out"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

                      {/* Floating Action Button */}
                      <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/90 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        <ArrowUpRight size={24} className="text-primary dark:text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-3xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-light line-clamp-3">
                        {project.description}
                      </p>
                      <div className="pt-4 flex items-center text-sm font-medium tracking-widest uppercase border-b border-transparent group-hover:border-accent/50 w-fit transition-colors">
                        Inquire About This Style
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
