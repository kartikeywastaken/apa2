import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'INITIATORS', href: '#about' },
    { label: 'WORKS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '0.8rem 3.5rem' : '1.5rem 3.5rem',
        transition: 'padding 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(5, 5, 5, 0.3)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Logo - extreme left */}
      <a href="#" style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.1rem',
        letterSpacing: '0.2em',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontWeight: 700,
      }}>
        APATHEIA
      </a>

      {/* Nav Links - extreme right */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center',
      }}>
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e5e5e5')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
