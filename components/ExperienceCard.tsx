import React from 'react';

interface Experience {
  position: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  description: string;
  keyResponsibilities: string[];
  achievements: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg  p-2 mb-6 border dark:border-gray-700 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {experience.position}
          </h3>
          <h4 className="text-lg text-teal-600 dark:text-teal-400 font-medium">
            {experience.company}
          </h4>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-gray-600 dark:text-gray-300">
            {experience.startDate} - {experience.endDate}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {experience.location}
          </p>
        </div>
      </div>
      
      {/* Description */}
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {experience.description}
      </p>
      
      {/* Key Responsibilities */}
      <div className="mt-6">
        <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
          Key Responsibilities:
        </h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {experience.keyResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      
      {/* Achievements */}
      <div className="mt-6">
        <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
          Achievements:
        </h5>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      {/* Technologies */}
      <div className="mt-6">
        <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
          Technologies:
        </h5>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;