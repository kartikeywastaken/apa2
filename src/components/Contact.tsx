
export default function Contact() {

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
          <a href="mailto:void@apatheia.net" aria-label="Email" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-crimson)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            CONTACT US
          </a>
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
