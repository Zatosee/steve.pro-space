// ✅ index.tsx avec fond nuageux + animations AOS
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DataSection from '../components/DataSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import PersonalProjects from '../components/PersonnalProject';
import Contact from '../components/ContactSection';

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Steve’s Portfolio";
    AOS.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <PersonalProjects />
      <ExperienceTimeline />
      <DataSection  />
      <Contact/>
      </main>
    </div>
  );
};

export default Portfolio;