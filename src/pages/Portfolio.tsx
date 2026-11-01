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
import projectLiving from '@/assets/project-living-room.webp';
import projectKitchen from '@/assets/project-kitchen.webp';
import projectBedroom from '@/assets/project-bedroom.webp';
import projectDining from '@/assets/project-dining.webp';
import projectOffice from '@/assets/project-office.webp';
import projectBathroom from '@/assets/project-bathroom.webp';

const projects = [
  {
    id: 1,
    title: 'Minimalist Haven',
    category: 'Living Room',
    location: 'Manhattan, NY',
    image: projectLiving,
    description: 'A serene living space with clean lines, neutral tones, and luxurious comfort. Custom furniture and carefully curated art create a sophisticated yet welcoming atmosphere.',
  },
  {
    id: 2,
    title: 'Culinary Elegance',
    category: 'Kitchen',
    location: 'Brooklyn, NY',
    image: projectKitchen,
    description: 'Modern kitchen design featuring marble countertops, warm wood cabinetry, and gold accents. Form meets function in this chef-worthy space.',
  },
  {
    id: 3,
    title: 'Tranquil Retreat',
    category: 'Master Bedroom',
    location: 'Upper East Side, NY',
    image: projectBedroom,
    description: 'A peaceful sanctuary designed for ultimate relaxation. Plush bedding, soft ambient lighting, and a neutral palette create the perfect escape.',
  },
  {
    id: 4,
    title: 'Refined Dining',
    category: 'Dining Room',
    location: 'Chelsea, NY',
    image: projectDining,
    description: 'Sophisticated dining space for memorable gatherings. Statement chandelier and velvet seating set the stage for elegant entertaining.',
  },
  {
    id: 5,
    title: 'Executive Study',
    category: 'Home Office',
    location: 'Tribeca, NY',
    image: projectOffice,
    description: 'Inspiring workspace combining productivity with style. Built-in shelving and leather accents create a distinguished atmosphere.',
  },
  {
    id: 6,
    title: 'Spa Sanctuary',
    category: 'Bathroom',
    location: 'SoHo, NY',
    image: projectBathroom,
    description: 'Luxurious bathroom retreat with natural stone, freestanding tub, and ambient lighting. A spa experience at home.',
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
