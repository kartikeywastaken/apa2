import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  bgImage?: string;
  height?: string | number;
}

export default function Card3D({ frontContent, backContent, bgImage, height = '400px' }: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-container" 
      style={{ width: '100%', height }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="preserve-3d"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, damping: 15 }}
      >
        {/* Front of Card */}
        <div 
          className="backface-hidden"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#111',
            border: '1px solid var(--border-color)',
            backgroundImage: bgImage ? `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url(${bgImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2rem'
          }}
        >
          {frontContent}
        </div>

        {/* Back of Card */}
        <div 
          className="backface-hidden"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--bg-color)',
            border: '1px solid var(--accent-crimson)',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
