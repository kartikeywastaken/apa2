import { ExternalLink } from 'lucide-react';
import GlowCard from './GlowCard';

export default function Projects() {
  const projects = [
    {
      title: "Hemlock",
      type: "Cryptography",
      tech: "OpenSSL, SHA, RSA",
      link: "https://github.com/kartikeywastaken/Hemlock",
    },
    {
      title: "Zecksnoid",
      type: "Application",
      tech: "React, SIWE, IPFS",
      link: "https://github.com/kartikeywastaken/zecksnoid",
    },
    {
      title: "Boldie",
      type: "Interactive",
      tech: "TypeScript, WebGL",
      link: "https://github.com/Ojasvvv/Astrothon",
    }
  ];

  return (
    <section className="section container" id="projects" style={{ paddingTop: '4rem' }}>
      <h2 className="section-title">Projects</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap',
        marginTop: '3rem'
      }}>
        {projects.map((proj, idx) => (
          <a key={idx} href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <GlowCard>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1.5rem',
                height: '100%',
                gap: '0.5rem'
              }}>
                <p style={{ color: '#8b0000', fontSize: '0.6rem', letterSpacing: '0.2em' }}>{proj.type}</p>
                <h3 style={{ fontSize: '1.1rem', letterSpacing: '0.1em', color: '#fff' }}>{proj.title}</h3>
                <div style={{ width: '20px', height: '1px', backgroundColor: '#8b0000', margin: '0.5rem 0' }} />
                <p style={{ fontSize: '0.6rem', color: '#888', letterSpacing: '0.1em' }}>{proj.tech}</p>
                <ExternalLink size={14} style={{ color: '#555', marginTop: '0.75rem' }} />
              </div>
            </GlowCard>
          </a>
        ))}
      </div>
    </section>
  );
}
