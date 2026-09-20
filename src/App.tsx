import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationSection from './components/CertificationSection';
import ProcessSection from './components/ProcessSection';
import CurrentFocus from './components/CurrentFocus';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-px w-full origin-left bg-accent"
    />
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <div className="grain-overlay" />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
        <ProcessSection />
        <CurrentFocus />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
