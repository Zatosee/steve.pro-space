// ✅ index.tsx avec fond nuageux + animations AOS
import { useEffect } from 'react';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCardView';
import ContactSection from '../components/ContactSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Steve’s Portfolio";
    AOS.init({ once: true });
  }, []);

  return (
    <div className="clouds-bg min-h-screen bg-fixed">
      <Navbar />

    <section id="hero" className="pt-32 pb-20 text-center relative">
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl max-w-2xl mx-auto p-10 shadow-xl" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        Salut, moi c’est <span className="text-sky-500">Steve.</span>
        </h1>
        <p className="text-gray-700 mb-6">
        Développeur Front-End passionné <br />
        Je crée des interfaces modernes et fluides, inspirées par la légèreté des nuages.
        </p>
        <a href="#projects"
        className="inline-block bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-full shadow hover:brightness-110">
        Découvrir mon travail
        </a>
    </div>
    </section>

      <section id="projects" className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8" data-aos="fade-down">Projects</h2>
          {projects.map((project, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard 
                key={project.id} 
                project={project} 
                flip={index % 2 !== 0} 
              />
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Portfolio;