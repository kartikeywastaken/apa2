import { Github, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

interface Social {
  icon: typeof Github;
  href: string;
}

interface Person {
  name: string;
  role: string;
  skills: string[];
  socials: Social[];
}

export default function About() {
  const people: Person[] = [
    {
      name: 'KARTIKEY',
      role: 'Systems Architect',
      skills: ['Low-level Systems', 'Security Infrastructure', 'Decentralized Networks', 'Cybernetics'],
      socials: [
        { icon: Globe, href: 'https://v0id.in/' },
        { icon: Github, href: 'https://github.com/kartikeywastaken' },
        { icon: Twitter, href: 'https://x.com/v0idwastaken' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/kartikeywastaken' },
      ]
    },
    {
      name: 'OJASV',
      role: 'Creative Developer',
      skills: ['Interactive Physics', '3D Web Rendering', 'Generative Art', 'Audio Visualization'],
      socials: [
        { icon: Github, href: 'https://github.com/Ojasvvv' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/ojasvv' },
      ]
    },
    {
      name: 'AADRIT',
      role: 'Engineer',
      skills: ['Backend Systems', 'Cloud Architecture', 'Data Pipelines', 'Automation'],
      socials: [
        { icon: Github, href: 'https://github.com/Aadrit555' },
        { icon: Twitter, href: 'https://x.com/Mimir_000_' },
        { icon: Instagram, href: 'https://www.instagram.com/alcibiadesx_000?igsh=MXg3bGFmbGk2b2ozdA==' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/skaoldi-ntlap' },
      ]
    }
  ];

  return (
    <section className="section container" id="about" style={{ paddingBottom: '28rem' }}>
      <h2 className="section-title">Team</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '4rem',
        flexWrap: 'wrap',
        marginTop: '4rem'
      }}>
        {people.map((person) => (
          <div key={person.name} style={{
            flex: '1 1 0',
            minWidth: '200px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              letterSpacing: '0.2em',
              color: '#fff',
              fontWeight: 600
            }}>
              {person.name}
            </h3>

            <p style={{
              color: '#8b0000',
              fontSize: '0.9rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 700
            }}>
              {person.role}
            </p>

            <div style={{
              width: '25px',
              height: '1px',
              backgroundColor: 'rgba(139, 0, 0, 0.5)',
              margin: '0.25rem 0'
            }} />

            <ul style={{
              listStyle: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              lineHeight: '2.2'
            }}>
              {person.skills.map(s => <li key={s}>{s}</li>)}
            </ul>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {person.socials.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                   style={{ color: '#555', transition: 'color 0.3s' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                   onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
