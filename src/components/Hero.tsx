import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', marginTop: '30vh' }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            color: 'var(--text-primary)',
            letterSpacing: '0.2em',
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            textShadow: '0 0 80px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)'
          }}
        >
          APATHEIA
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--accent-crimson)',
            margin: '1.5rem auto'
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: 'var(--accent-gold)',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)',
            fontWeight: 300
          }}
        >
          Forged Beyond Emotion
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '1px', height: '30px', backgroundColor: 'var(--text-secondary)' }}
        />
      </motion.div>
    </section>
  );
}
