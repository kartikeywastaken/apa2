import NoiseCanvas from './components/NoiseCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Live Canvas Noise */}
      <NoiseCanvas />

      {/* Background image - scrolls with page, uses full image */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url(/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.55) saturate(0.85)',
        zIndex: -2, pointerEvents: 'none'
      }} />
      {/* Vignette - stays fixed */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.75) 100%)',
        zIndex: -1, pointerEvents: 'none'
      }} />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
