import { Mail, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:void@apatheia.net' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer id="contact" style={{
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 0',
      marginTop: '12rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            letterSpacing: '0.15em',
            marginBottom: '0.5rem'
          }}>
            APATHEIA
          </h3>
          <a href="mailto:void@apatheia.net" style={{
            color: 'var(--accent-crimson)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            letterSpacing: '0.05em'
          }}>
            void@apatheia.net
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-crimson)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-heading)'
        }}>
          © 2026 APATHEIA
        </p>
      </div>
    </footer>
  );
}
