'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'minimal';
  padding?: 'sm' | 'md' | 'lg';
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  variant = 'default',
  padding = 'md'
}: GlassCardProps) {
  const baseClasses = 'relative overflow-hidden';

  const variantClasses = {
    default: 'glass-card',
    elevated: 'glass-card shadow-2xl',
    minimal: 'glass bg-white/5 backdrop-blur-sm border-white/10'
  };

  const paddingClasses = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10'
  };

  const hoverClasses = hover
    ? 'transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20'
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover effect overlay */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}