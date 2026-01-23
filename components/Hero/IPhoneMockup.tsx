import React from 'react';
import { motion } from 'framer-motion';

const IPhoneMockup = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto lg:max-w-[360px]">
      {/* Glow Effect behind phone */}
      <div className="absolute -inset-4 bg-accent-primary/20 blur-3xl rounded-[3rem] opacity-50" />
      
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        {/* iPhone Frame */}
        <div className="relative aspect-[393/852] bg-[#000] rounded-[3.5rem] border-[8px] border-[#1C1C1E] shadow-2xl overflow-hidden ring-1 ring-white/10">
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-3xl z-30 flex items-center justify-end px-4">
            <div className="w-2 h-2 rounded-full bg-[#1C1C1E]" />
          </div>

          {/* Video Content */}
          <div className="absolute inset-0 z-10">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Reflection overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
        </div>

        {/* Shadow below phone */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/40 blur-xl rounded-full" />
      </motion.div>
    </div>
  );
};

export default IPhoneMockup;
