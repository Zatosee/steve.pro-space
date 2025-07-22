import { useState } from 'react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  flip?: boolean;
}

const ProjectCardView: React.FC<ProjectCardProps> = ({ project, flip = false }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`my-12 flex flex-col lg:items-center ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      id={project.id}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Image Section */}
      <div className="lg:w-1/2 lg:px-6 mb-6 lg:mb-0">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-blue-200"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 lg:px-6 text-gray-800 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-md">
        <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
          {project.title}
          <span className="text-lg font-light text-gray-500 ml-2">{project.year}</span>
        </h3>

        <p className="mb-4 text-gray-700">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-100 text-blue-800 rounded-full px-3 py-1 font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-400 to-sky-500 hover:brightness-105 text-white text-sm font-semibold px-4 py-2 rounded-full mr-3 mb-2 shadow-md"
            >
              🌐 Live Demo
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-slate-400 to-slate-600 hover:brightness-105 text-white text-sm font-semibold px-4 py-2 rounded-full mb-2 shadow-md"
            >
              💻 Code Source
            </a>
          )}
        </div>

        {project.images && project.images.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-sky-700 font-medium hover:underline transition"
            >
              {expanded ? '▾ Masquer les détails' : '▸ Voir les détails'}
            </button>
          </div>
        )}

        {expanded && project.images && (
          <div className="mt-4">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="min-w-[200px] max-w-xs flex-shrink-0">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-1">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCardView;
