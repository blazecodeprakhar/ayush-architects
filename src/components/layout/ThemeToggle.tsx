/**
 * ThemeToggle Component
 * Luxury architectural switch toggle for switching between Daylight and Ambient Evening Lights.
 * Designed like a high-end designer dimmer switch with smooth spring action and warm filament glow.
 */

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Lightbulb } from 'lucide-react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-[72px] h-8 rounded-full border border-border/60 bg-muted/30 ${className}`} />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Turn off evening lights (Switch to daylight)' : 'Turn on evening lights (Switch to night)'}
      title={isDark ? 'Lights ON (Evening mode) • Click for Daylight' : 'Daylight mode • Click to turn ON evening lights'}
      className={`relative w-[74px] h-[34px] rounded-full p-1 cursor-pointer select-none transition-all duration-500 flex items-center justify-between border ${
        isDark
          ? 'bg-stone-950/90 border-amber-500/50 shadow-[0_0_16px_rgba(245,158,11,0.25)]'
          : 'bg-stone-200/80 border-stone-300/90 shadow-inner'
      } ${className}`}
    >
      {/* Background Track Icons */}
      <span className="flex items-center justify-center w-6 h-6 text-amber-600/70 transition-opacity duration-300">
        <Sun size={14} strokeWidth={2.2} />
      </span>

      <span className="flex items-center justify-center w-6 h-6 text-amber-400 transition-opacity duration-300">
        <Moon size={13} strokeWidth={2.2} />
      </span>

      {/* The Sliding Switch Knob / Light Switch Dimmer */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 32,
        }}
        className={`absolute top-[3px] w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          isDark
            ? 'left-[43px] bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-stone-950 shadow-[0_0_12px_rgba(245,158,11,0.85)]'
            : 'left-[3px] bg-white text-amber-600 shadow-md border border-stone-200'
        }`}
      >
        <motion.div
          key={isDark ? 'dark-icon' : 'light-icon'}
          initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Lightbulb size={13} strokeWidth={2.5} className="fill-amber-950/20" />
          ) : (
            <Sun size={13} strokeWidth={2.5} />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
