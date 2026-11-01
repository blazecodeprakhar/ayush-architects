/**
 * Portfolio Page
 * Project gallery showcasing architectural & interior design projects with multi-angle sliders
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { projects, Project } from '@/components/SwipeGallery/images';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [angleIndex, setAngleIndex] = useState(0);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultiple = images.length > 1;

  const nextAngle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAngleIndex((prev) => (prev + 1) % images.length);
  };

  const prevAngle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAngleIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <Link to="/contact" className="block flex-grow">
        {/* Image Container with Angle Slider */}
        <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-muted shadow-soft group/img">
          <AnimatePresence mode="wait">
            <motion.img
              key={`${project.id}-${angleIndex}`}
              src={images[angleIndex]}
              alt={`${project.title} - Angle ${angleIndex + 1}`}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105 ease-out"
            />
          </AnimatePresence>

          {/* Angle Counter Badge */}
          {hasMultiple && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium tracking-wider text-white z-20 pointer-events-none border border-white/10 flex items-center gap-1.5 shadow-md">
              <Camera size={13} className="text-accent" />
              <span>{angleIndex + 1} / {images.length} Angles</span>
            </div>
          )}

          {/* Slider Prev / Next Arrows */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={prevAngle}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Previous angle"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextAngle}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Next angle"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slider Angle Dots */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setAngleIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === angleIndex ? 'w-6 bg-accent' : 'w-1.5 bg-white/50 hover:bg-white/90'
                    }`}
                    aria-label={`Angle ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Floating Action Button */}
          <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/90 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg z-10 pointer-events-none">
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
  );
};

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
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
