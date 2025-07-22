// file: pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <Head>
        <title>Steve’s Portfolio</title>
        <meta name="description" content="Portfolio of Steve - Fullstack Developer" />
      </Head>

      {/* Navigation */}
      <Navbar />

      {/* Hero / Introduction Section */}
      <section id="hero" className="pt-20 pb-16 text-center relative">
        {/* If you implement a starry background with CSS, you might have a <div className="absolute inset-0 bg-stars"></div> here */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to My Space</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          Hi, I’m <span className="text-white font-semibold">Steve</span>, a passionate fullstack developer. <br className="hidden sm:inline" />
          I love building innovative web applications and experiences.
        </p>
        <a href="#projects" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full">
          ↓ Explore My Work
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              flip={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
