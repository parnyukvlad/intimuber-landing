'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IPhoneMockup() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = '/videos/demo.mp4';
    video.onloadeddata = () => setIsLoaded(true);
    video.onerror = () => setHasError(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-[300px] h-[640px] bg-[#0C0C0E] rounded-[3rem] p-3 border border-white/10 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-[#0C0C0E] rounded-[2.5rem] overflow-hidden">
          {!hasError ? (
            <video
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full bg-[#141417] flex items-center justify-center">
              <span className="text-[#8A8A8A] text-xs">Preview</span>
            </div>
          )}
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
        </div>
      </div>
    </div>
  );
}
