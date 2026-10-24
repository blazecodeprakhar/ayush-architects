/**
 * Services Page
 * Complete list of all 12 architectural & design services and 10-step design process
 * for Ayush Architects.
 */

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  FileText,
  Box,
  Maximize2,
  Home,
  Building2,
  Cpu,
  FolderKanban,
  FileCode2,
  Trees,
  Hammer,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import projectKitchen from '@/assets/project-kitchen.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const allServices = [
  {
    icon: Compass,
    num: '01',
    title: 'Architectural Planning',
    description:
      'Complete architectural planning and design solutions for residential, commercial, and institutional projects.',
    features: [
      'Site analysis & conceptual massing',
      'Residential and commercial design',
      'Institutional space planning',
      'Building codes & compliance advisory',
    ],
  },
  {
    icon: FileText,
    num: '02',
    title: '2D Floor Plans & Drawings',
    description:
      'Detailed 2D floor plans, working drawings, furniture layouts, and construction drawings as per project requirements.',
    features: [
      'Comprehensive schematic floor plans',
      'Furniture placement & circulation planning',
      'Dimensional working drawings',
      'Authority submission plans',
    ],
  },
  {
    icon: Box,
    num: '03',
    title: '3D Visualization',
    description:
      'Realistic 3D models and renders to help you visualize your project before construction.',
    features: [
      'Photorealistic exterior & interior renders',
      'Lighting and material study simulations',
      'Multiple finish comparison options',
      'Perspective views from every angle',
    ],
  },
  {
    icon: Maximize2,
    num: '04',
    title: 'Space Planning',
    description:
      'Efficient planning of spaces with a focus on functionality, circulation, comfort, and aesthetics.',
    features: [
      'Activity zoning and movement flow analysis',
      'Spatial optimization for compact & large footprints',
      'Natural ventilation & daylight optimization',
      'Ergonomic layout design',
    ],
  },
  {
    icon: Home,
    num: '05',
    title: 'Interior Design',
    description:
      'Complete interior design solutions including furniture layouts, material selection, lighting, finishes, and detailed interior drawings.',
    features: [
      'Custom furniture & joinery detailing',
      'Material, stone, and wood selection',
      'Architectural lighting schemes',
      'Detailed interior elevation drawings',
    ],
  },
  {
    icon: Building2,
    num: '06',
    title: 'Facade & Elevation Design',
    description:
      'Modern and functional facade and elevation designs that enhance the appearance and character of your building.',
    features: [
      'Contemporary exterior treatments',
      'Louvers, textures, and shading elements',
      'Weather-resistant material specifications',
      'Architectural accent lighting details',
    ],
  },
  {
    icon: Cpu,
    num: '07',
    title: 'Structural Planning',
    description:
      'Structural drawings and planning for safe, stable, and efficient building structures.',
    features: [
      'Structural layout coordination',
      'Safety and seismic compliance planning',
      'Column and beam positioning strategies',
      'Coordination with licensed structural engineers',
    ],
  },
  {
    icon: FolderKanban,
    num: '08',
    title: 'Project Management',
    description:
      'Professional project coordination and management to help ensure quality, timelines, and smooth execution.',
    features: [
      'Vendor and contractor liaison',
      'Milestone tracking and budget management',
      'Quality control and progress reports',
      'On-site schedule management',
    ],
  },
  {
    icon: FileCode2,
    num: '09',
    title: 'Working & Construction Drawings',
    description:
      'Detailed drawings required for site execution, including plans, sections, elevations, details, and construction information.',
    features: [
      'Detailed section and elevation sheets',
      'Door, window, and joinery schedules',
      'Plumbing and electrical rough-in coordinates',
      'Comprehensive on-site construction booklets',
    ],
  },
  {
    icon: Trees,
    num: '10',
    title: 'Landscape Design',
    description:
      'Planning of outdoor spaces, gardens, pathways, plantations, and landscape elements to complement the building.',
    features: [
      'Hardscape & softscape layout design',
      'Water features, patios, and pergolas',
      'Indigenous plant selection & garden lighting',
      'Outdoor living and entertaining zones',
    ],
  },
  {
    icon: Hammer,
    num: '11',
    title: 'Renovation & Remodeling',
    description:
      'Design solutions for renovating, upgrading, and transforming existing residential and commercial spaces.',
    features: [
      'Adaptive reuse and structural alterations',
      'Modern aesthetic upgrades',
      'Energy-efficiency improvements',
      'Budget-conscious phasing plans',
    ],
  },
  {
    icon: MapPin,
    num: '12',
    title: 'Site Planning',
    description:
      'Complete site development planning including building placement, circulation, parking, landscape areas, and other site requirements.',
    features: [
      'Topography & orientation analysis',
      'Vehicular and pedestrian circulation',
      'Parking layout & service access planning',
      'Integration with surrounding urban fabric',
    ],
  },
];

const designProcessSteps = [
  {
    step: '01',
    title: 'Consultation & Understanding',
    desc: 'We begin by understanding your requirements, ideas, lifestyle, budget, site conditions, and project goals.',
  },
  {
    step: '02',
    title: 'Site Study & Analysis',
    desc: 'We study the site, dimensions, surroundings, orientation, access, regulations, and other factors that influence the design.',
  },
  {
    step: '03',
    title: 'Concept & Design Development',
    desc: 'We develop creative design concepts based on your requirements, combining functionality, aesthetics, and architectural character.',
  },
  {
    step: '04',
    title: '2D Planning & Design',
    desc: 'The selected concept is developed into detailed floor plans, elevations, sections, space planning, and other architectural drawings.',
  },
  {
    step: '05',
    title: '3D Visualization',
    desc: 'We create realistic 3D models and visualizations to help you understand the proposed spaces, materials, colours, and overall design before execution.',
  },
  {
    step: '06',
    title: 'Design Finalization',
    desc: 'We refine the design based on your feedback and finalize materials, finishes, furniture, lighting, and other important design elements.',
  },
  {
    step: '07',
    title: 'Working Drawings & Documentation',
    desc: 'Detailed working and construction drawings are prepared to provide clear information for execution at the site.',
  },
  {
    step: '08',
    title: 'Execution & Project Coordination',
    desc: 'We coordinate with contractors and other professionals to help ensure that the design is executed accurately and efficiently.',
  },
  {
    step: '09',
    title: 'Quality & Design Review',
    desc: 'Throughout the project, we review the work and design details to maintain consistency with the approved concept and drawings.',
  },
  {
    step: '10',
    title: 'Final Reveal',
    desc: 'The completed project is delivered as a finished space, bringing the original concept to life while reflecting your requirements and vision.',
  },
];

const faqs = [
  {
    question: 'How do you get started on a new architectural project?',
    answer:
      'We begin with an in-depth consultation and site study to understand your lifestyle, aesthetic goals, regulations, and budget. From there, we formulate customized design concepts and floor plans.',
  },
  {
    question: 'Can you handle both architectural planning and interior design?',
    answer:
      'Yes, Ayush Architects is a full-service architecture and design studio providing complete integrated solutions from structural planning to bespoke interior joinery and lighting.',
  },
  {
    question: 'Do you provide realistic 3D renderings before construction?',
    answer:
      'Yes! Realistic 3D visualizations are an integral part of our process, allowing you to preview materials, finishes, lighting, and colors before breaking ground.',
  },
  {
    question: 'Do you oversee site execution and coordination?',
    answer:
      'Yes, we provide comprehensive working drawings and coordinate closely with contractors to ensure the final space perfectly aligns with approved designs.',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Ayush Architects | Complete Architecture & Design</title>
        <meta
          name="description"
          content="Explore the 12 comprehensive architecture and interior design services offered by Ayush Architects. From planning and 3D visualization to execution coordination."
        />
      </Helmet>

      <Layout>
        {/* Page Header */}
        <PageHeader
          tagline="SPACES FOR BETTER TOMORROW"
          title="Our Architecture & Design Services"
          description="Explore our full spectrum of 12 architectural planning, visualization, interior design, and site execution services."
        />

        {/* 12 Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="bg-card rounded-3xl p-8 border border-border/60 hover:border-accent/40 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary dark:bg-muted/50 flex items-center justify-center text-accent">
                          <Icon size={26} strokeWidth={1.75} />
                        </div>
                        <span className="font-serif text-2xl text-muted-foreground/30 font-medium">
                          {service.num}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 text-xs text-foreground/80">
                            <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/40">
                      <Link
                        to="/contact"
                        className="btn-outline-elegant w-full text-center py-2.5 text-xs inline-block"
                      >
                        Inquire About Service
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10-Step Design Process Section */}
        <section id="process" className="py-24 lg:py-32 bg-secondary/30 dark:bg-card/40 transition-colors">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <motion.span
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
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground"
              >
                10 Steps to Your Finished Space
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light"
              >
                From initial consultation to final reveal, every phase is engineered for clarity, quality, and precision.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {designProcessSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="bg-card rounded-2xl p-6 lg:p-8 border border-border/60 hover:border-accent/40 shadow-soft transition-all duration-300 flex items-start gap-5"
                >
                  <span className="font-serif text-2xl lg:text-3xl font-medium text-accent shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="divider-gold inline-block mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                  Common Questions
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-card rounded-2xl p-6 sm:p-8 border border-border/60"
                  >
                    <h3 className="font-serif text-lg sm:text-xl font-medium mb-3 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#171411] text-stone-100 border-t border-[#312922]">
          <div className="section-container relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white"
            >
              Let's Discuss Your Architecture Project
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
            >
              Schedule a consultation with Ayush Architects to turn your vision into a well-designed, functional space.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className="btn-gold inline-flex items-center gap-3 shadow-lg">
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
