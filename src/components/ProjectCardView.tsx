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
    >
      {/* Image Section */}
      <div className="lg:w-1/2 lg:px-6 mb-6 lg:mb-0">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-auto object-cover rounded-xl shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 lg:px-6 text-gray-200">
        <h3 className="text-2xl font-bold mb-1">
          {project.title}
          <span className="text-xl font-normal text-gray-400">{" "}{project.year}</span>
        </h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-4">
          {project.tech.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-gray-800 rounded-full px-3 py-1 m-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded mr-3 mb-2">
              Live Demo
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded mb-2">
              Source Code
            </a>
          )}
        </div>
        {project.images && project.images.length > 0 && (
          <div>
            {!expanded ? (
              <button 
                onClick={() => setExpanded(true)} 
                className="text-sm text-blue-400 hover:underline"
              >
                ▸ View details
              </button>
            ) : (
              <button 
                onClick={() => setExpanded(false)} 
                className="text-sm text-blue-400 hover:underline"
              >
                ▾ Hide details
              </button>
            )}
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
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                  <p className="text-xs text-gray-400 mt-1">{img.caption}</p>
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
