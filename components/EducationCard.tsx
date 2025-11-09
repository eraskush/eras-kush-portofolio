import React from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaGraduationCap } from "react-icons/fa6";

interface Education {
  degree: string;
  university: string;
  major: string;
  startDate: string;
  endDate: string;
  duration: string;
 degreeClass : string;
  description: string;
  
}

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
      {/* Header Section */}
      <div className="flex-row md:flex-row md:justify-between md:items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {education.degree}
          </h3>
          <h4 className="text-lg text-teal-600 dark:text-teal-400 font-medium">
            {education.university}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {education.major}
          </p>
        </div>
        <div className="mt-2 flex flex-col items-start gap-2">
           <button 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600   transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            disabled
            aria-label={`Duration: ${education.startDate} to ${education.endDate}`}
          >
            <AiFillCalendar className="text-lg" />
            <span className="font-medium">
              {education.startDate} - {education.endDate}
            </span>
          </button>
          <button className='inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600   transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50'
                  disabled
                  aria-label={`Degree Class: ${education.degreeClass}`}
          >
            <FaGraduationCap className="text-lg" />
          <span className="font-medium">
            Degree Class: {education.degreeClass}
          </span>
          </button>
        </div>
      </div>
      
      {/* Description */}
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        {education.description}
      </p>
      
     
    </div>
  );
};

export default EducationCard;