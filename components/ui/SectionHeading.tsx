'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionHeading({
  title,
  subtitle,
  className = '',
  align = 'center',
  size = 'lg'
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const sizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
    xl: 'text-6xl md:text-7xl lg:text-8xl'
  };

  return (
    <motion.div
      className={`${alignClasses[align]} mb-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Decorative line */}
      {align === 'center' && (
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="w-2 h-2 bg-purple-500 rounded-full mx-4" />
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </motion.div>
      )}

      <motion.h2
        className={`${sizeClasses[size]} font-black gradient-text mb-6 leading-tight tracking-tight`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* Subtle accent line */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}