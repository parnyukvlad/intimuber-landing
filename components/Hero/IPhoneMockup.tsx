'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IPhoneMockup() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Preload video for better performance
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = '/videos/demo.mp4';

    video.onloadeddata = () => setIsLoaded(true);
    video.onerror = () => setHasError(true);

    return () => {
      video.removeEventListener('loadeddata', () => setIsLoaded(true));
      video.removeEventListener('error', () => setHasError(true));
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* iPhone 14 Pro Max Frame */}
      <div className="relative w-[320px] h-[690px] bg-black rounded-[3rem] p-2 shadow-2xl glow glow-pulse">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10" />

        {/* Screen */}
        <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {/* Video Content */}
          {!hasError ? (
            <video
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              <source src="/videos/demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-pink-900/20 flex items-center justify-center">
              <div className="text-white/60 text-sm text-center px-4">
                Video demo preview
              </div>
            </div>
          )}

          {/* Loading placeholder */}
          {!isLoaded && !hasError && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/50"
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoaded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-white/80 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading demo...
              </motion.div>
            </motion.div>
          )}

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute -inset-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}