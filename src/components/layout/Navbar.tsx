/**
 * Navbar Component
 * Responsive navigation for Ayush Architects with theme toggle and smooth animations
 */

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    setIsOpen(false);
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 dark:bg-background/85 backdrop-blur-md shadow-md border-b border-border/40 py-3'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" onClick={handleLogoClick} className="group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                    Ayush Architects
                  </span>
                </div>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-accent font-medium">
                  Spaces For Better Tomorrow
                </span>
              </motion.div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1 group ${
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-foreground/80 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                        location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="btn-gold inline-flex items-center text-xs tracking-widest px-6 py-2.5 shadow-sm hover:shadow-gold"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Mobile Right Controls: Theme Toggle + Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border/80 bg-background/80 dark:bg-stone-900/80 backdrop-blur-md text-foreground hover:text-accent hover:border-accent transition-colors shadow-sm"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu Overlay - OUTSIDE header so it is NEVER trapped by backdrop-blur or header height */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#FAF7F2] dark:bg-[#171411] flex flex-col justify-between overflow-y-auto"
            style={{ height: '100dvh', width: '100vw' }}
          >
            {/* Sticky Mobile Menu Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 dark:border-[#312922] bg-[#FAF7F2] dark:bg-[#171411] sticky top-0 z-20">
              <a
                href="/"
                onClick={(e) => {
                  handleLogoClick(e);
                  setIsOpen(false);
                }}
                className="flex flex-col"
              >
                <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                  Ayush Architects
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-medium">
                  Spaces For Better Tomorrow
                </span>
              </a>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-stone-300 dark:border-stone-700 bg-white/90 dark:bg-stone-900/90 text-foreground hover:text-accent hover:border-accent transition-colors shadow-sm"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Links in Center */}
            <div className="flex-1 px-8 py-8 flex flex-col justify-center items-center gap-6">
              {navLinks.map((link, index) => {
                const isLinkActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: 0.04 * index }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        (e.currentTarget as HTMLElement)?.blur();
                        handleNavClick(e, link.path);
                      }}
                      className={`block py-1.5 text-2xl font-serif tracking-wide transition-colors duration-200 outline-none select-none ${
                        isLinkActive
                          ? 'text-accent font-semibold'
                          : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="w-full max-w-xs mt-4">
                <Link
                  to="/contact"
                  onClick={(e) => {
                    (e.currentTarget as HTMLElement)?.blur();
                    handleNavClick(e, '/contact');
                  }}
                  className="btn-gold w-full flex items-center justify-center py-3.5 text-xs tracking-widest font-semibold uppercase shadow-gold"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            {/* Direct Contact Bar at Bottom */}
            <div className="px-6 py-4 border-t border-stone-200/80 dark:border-[#312922] bg-stone-100/60 dark:bg-[#120f0d] flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground">
              <a
                href="tel:+918685845744"
                className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
              >
                <span>Call: +91 86858 45744</span>
              </a>
              <a
                href="mailto:ayusharchitects@gmail.com"
                className="hover:text-accent transition-colors text-stone-500 dark:text-stone-400"
              >
                ayusharchitects@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
