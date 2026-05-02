import { AmbientBackground } from './components/AmbientBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Community } from './sections/Community';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Community />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
