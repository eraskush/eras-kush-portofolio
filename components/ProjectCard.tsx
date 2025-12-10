import React from 'react';

interface Project {
  title: string;
  tags: string[];
  subtitle: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const extraTechCount = project.technologies.length > 4 ? project.technologies.length - 4 : 0;
  const displayedTech = project.technologies.slice(0, 4);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full transform hover:-translate-y-1">
        {/* Image Section - Top of the card */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {/* Optional overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 truncate">
            {project.title}
          </h3>
          <h4 className="text-md text-gray-600 dark:text-gray-300 mb-4 truncate">
            {project.subtitle}
          </h4>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow line-clamp-3">
            {project.description}
          </p>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {displayedTech.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 truncate"
                  title={tech}
                >
                  {tech}
                </span>
              ))}
              {extraTechCount > 0 && (
                <span 
                  className="px-2 py-1 text-xs rounded-lg bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                  title={`${extraTechCount} more technologies`}
                >
                  +{extraTechCount}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex gap-3 mt-auto">
            <a 
              href={project.liveDemoUrl} 
              className="flex-1 px-3 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg text-center text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
             {project.githubUrl && (  // Only show GitHub button if URL exists
    <a 
      href={project.githubUrl} 
      className="flex-1 px-3 py-2.5 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-lg text-center text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg border border-gray-700 dark:border-gray-600"
      target="_blank" 
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;