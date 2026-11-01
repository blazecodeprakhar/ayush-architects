/**
 * Portfolio Page
 * Project gallery showcasing architectural & interior design projects with multi-angle sliders
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { projects, Project } from '@/components/SwipeGallery/images';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32 },
      opacity: { duration: 0.3, ease: 'easeOut' },
      scale: { duration: 0.3, ease: 'easeOut' },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32 },
      opacity: { duration: 0.25, ease: 'easeIn' },
      scale: { duration: 0.25, ease: 'easeIn' },
    },
  }),
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [, setIsDragging] = useState(false);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultiple = images.length > 1;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 35;
    const swipeVelocity = 250;
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX < -swipeThreshold || velocityX < -swipeVelocity) {
      paginate(1);
    } else if (offsetX > swipeThreshold || velocityX > swipeVelocity) {
      paginate(-1);
    }

    setTimeout(() => {
      setIsDragging(false);
    }, 120);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col h-full select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Interactive Multi-Angle Showcase Area with Drag & Swipe */}
      <div
        className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-muted shadow-soft group/img select-none cursor-grab active:cursor-grabbing touch-pan-y"
        onContextMenu={(e) => e.preventDefault()}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={`${project.id}-${currentIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={hasMultiple ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.22}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={images[currentIndex]}
              alt={`${project.title} - View ${currentIndex + 1}`}
              className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 group-hover/img:scale-105 ease-out"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter Badge - Clean count without word 'Angles' */}
        {hasMultiple && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium tracking-wider text-white z-20 pointer-events-none border border-white/10 flex items-center gap-1.5 shadow-md">
            <Camera size={13} className="text-accent" />
            <span>{currentIndex + 1} / {images.length}</span>
          </div>
        )}

        {/* Slider Controls */}
        {hasMultiple && (
          <>
            {/* Left Chevron */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                paginate(-1);
              }}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-85 sm:opacity-0 sm:group-hover/img:opacity-100 transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 active:scale-95"
              aria-label="Previous view"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Chevron */}
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                paginate(1);
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md opacity-85 sm:opacity-0 sm:group-hover/img:opacity-100 transition-all duration-300 border border-white/20 shadow-lg hover:scale-110 active:scale-95"
              aria-label="Next view"
            >
              <ChevronRight size={20} />
            </button>

            {/* Angle Indicator Dots */}
            <div
              onPointerDown={(e) => e.stopPropagation()}
              className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-auto"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (i !== currentIndex) {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-accent shadow-sm' : 'w-1.5 bg-white/50 hover:bg-white/90'
                  }`}
                  aria-label={`View ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Floating Action Button */}
        <Link
          to="/contact"
          onPointerDown={(e) => e.stopPropagation()}
          className="absolute bottom-6 right-6 w-14 h-14 bg-white/90 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 shadow-lg z-20 hover:scale-110 active:scale-95"
          aria-label={`Inquire about ${project.title}`}
        >
          <ArrowUpRight size={24} className="text-primary dark:text-accent" />
        </Link>
      </div>

      {/* Content & Inquire Link */}
      <Link to="/contact" className="flex flex-col gap-3 flex-grow group/text">
        <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold">
          {project.category}
        </span>
        <h3 className="font-serif text-3xl font-medium text-foreground group-hover/text:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>
        <div className="pt-4 flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-transparent group-hover/text:border-accent/50 w-fit transition-colors text-foreground group-hover/text:text-accent">
          <span>Inquire About This Style</span>
          <ArrowUpRight size={16} className="text-accent transition-transform duration-300 group-hover/text:translate-x-0.5 group-hover/text:-translate-y-0.5" />
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
