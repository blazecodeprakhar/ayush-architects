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
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 dark:bg-background/85 backdrop-blur-md shadow-md border-b border-border/40 py-3'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="relative z-[60] group">
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
          <div className="flex items-center gap-3 lg:hidden relative z-[60]">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border/80 bg-background/80 backdrop-blur-md text-foreground hover:text-accent hover:border-accent transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] lg:hidden bg-background/95 dark:bg-background/95 flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-sm">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium">
                Ayush Architects
              </span>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.05 + index * 0.07 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`block py-2 text-2xl font-serif tracking-wide transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-accent font-medium'
                        : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-4"
              >
                <Link
                  to="/contact"
                  onClick={(e) => handleNavClick(e, '/contact')}
                  className="btn-gold w-full flex items-center justify-center shadow-lg"
                >
                  Book Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
