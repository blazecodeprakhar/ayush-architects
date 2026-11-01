/**
 * Footer Component
 * Architectural footer with links, services, contact, and branding for Ayush Architects
 * Rich #171411 espresso dark foundation
 */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171411] text-stone-200 border-t border-[#312922]">
      {/* Main Footer Content */}
      <div className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/"
              onClick={handleLogoClick}
              className="inline-block mb-6 cursor-pointer group"
            >
              <span className="font-serif text-2xl font-semibold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                Ayush Architects
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mt-1 font-medium">
                Spaces For Better Tomorrow
              </p>
            </motion.a>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light">
              Where imagination takes form and every space tells a story. Thoughtful architecture
              blending creativity, functionality, and timeless design.
            </p>
            {/* Social Icons with circular hover styles */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-stone-700/80 bg-stone-900/60 flex items-center justify-center text-stone-300 hover:bg-accent hover:border-accent hover:text-stone-950 transition-all duration-300 shadow-sm"
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Architecture Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact & Consultation', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className="text-stone-400 hover:text-accent transition-colors duration-300 text-sm font-light inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services from Ayush Architects */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-6">
              Core Services
            </h4>
            <ul className="space-y-3">
              {[
                'Architectural Planning',
                '2D Floor Plans & Drawings',
                '3D Visualization',
                'Space Planning',
                'Interior Design',
                'Facade & Elevation Design',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-stone-400 hover:text-accent transition-colors duration-300 text-sm font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-accent mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm text-stone-400 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Ayush Architects Studio, Architecture & Design Studio</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+918685845744" className="hover:text-accent transition-colors">
                  +91 86858 45744
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:ayusharchitects@gmail.com" className="hover:text-accent transition-colors">
                  ayusharchitects@gmail.com
                </a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="btn-gold w-full text-center py-3 text-xs inline-block shadow-md hover:shadow-gold"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800/80 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© {currentYear} Ayush Architects. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-accent font-medium">Spaces For Better Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
