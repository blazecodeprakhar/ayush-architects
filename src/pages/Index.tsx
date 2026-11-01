/**
 * Homepage
 * Main landing page with all sections
 */

import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ayush Architects | Spaces For Better Tomorrow</title>
        <meta
          name="description"
          content="Ayush Architects is an architecture and design studio creating thoughtful, functional, and distinctive spaces. Where imagination takes form and every space tells a story."
        />
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
