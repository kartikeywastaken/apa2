import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import GlowCard from './GlowCard';

export default function About() {
  const people = [
    {
      name: 'KARTIKEY',
      role: 'Systems Architect',
      skills: ['Low-level Systems', 'Security Infrastructure', 'Decentralized Networks', 'Cybernetics']
    },
    {
      name: 'OJAS',
      role: 'Creative Developer',
      skills: ['Interactive Physics', '3D Web Rendering', 'Generative Art', 'Audio Visualization']
    }
  ];

  return (
    <section className="section container" id="about" style={{ paddingBottom: '28rem' }}>
      <h2 className="section-title">Initiators</h2>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6rem',
        flexWrap: 'wrap',
        marginTop: '4rem'
      }}>
        {people.map((person) => (
          <div key={person.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <GlowCard className="person-card">
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
                <h3 style={{ fontSize: '1.4rem', letterSpacing: '0.15em', marginBottom: '0.25rem', color: '#fff' }}>{person.name}</h3>
                <p style={{ color: '#8b0000', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{person.role}</p>
                <div style={{ width: '30px', height: '1px', backgroundColor: '#8b0000', margin: '0.75rem 0' }} />
                <ul style={{ listStyle: 'none', color: '#aaa', fontSize: '0.7rem', lineHeight: '1.8' }}>
                  {person.skills.map(s => <li key={s}>▸ {s}</li>)}
                </ul>
              </div>
            </GlowCard>
            
            {/* Social links below card */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" style={{ color: '#666', transition: 'color 0.3s' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#8b0000')}
                   onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
