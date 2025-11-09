import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillLinkedin} from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";
import Image from 'next/legacy/image';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import eras1  from "../public/eras1.jpg"
import { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { workExperiences } from '../data/WorkExperience';
import EducationCard from '../components/EducationCard';
import { education } from '../data/Education';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eras Kush portfolio</title>
        <meta name="description" content="Eras Kush " />
        <meta property="og:image"  content="/eras.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpg" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen ">
          <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white '>developedbyeraskush</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-white'/></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'  href="#">
              Resume</a></li>
          </ul>
          </nav> 
          <div className='text-center p-5 md:flex md:items-center md:justify-between md:gap-8 md:text-left'>
  {/* Text Content */}
  <div className='md:flex-1'>
    <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Eras Kush</h2>
    <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer</h3>
    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto md:mx-0 dark:text-gray-400'>
      Bridging design and data through code
    </p>
    <div className='flex text-5xl justify-center gap-10 py-3 text-gray-600 md:justify-start'>
      <a 
        href="https://www.linkedin.com/in/erasmus-kushinga-masunga-411740258" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <AiFillLinkedin />
      </a>
      <a 
        href="https://www.github.com/eraskush" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <FaGithub />
      </a>
    </div>
  </div>
  
  {/* Image - FIXED */}
  <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-8 overflow-hidden md:h-96 md:w-96 md:mt-0 md:flex-1'>
    <Image 
      src={eras1} 
      alt="Eras Kush" 
      layout="fill"
      className="object-cover"
    />
  </div>
</div>
          
          
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>About Me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Hello! I'm Erasmus K Masunga , a full-stack developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or indulging in my love for photography. I'm always eager to learn new skills and take on exciting challenges in the world of web development.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Here are some of the technologies and tools I work with:
            </p>
           <div className="flex flex-wrap gap-2">
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    HTML5, CSS3, JavaScript (ES6+), Tailwind CSS
  </span>
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    React.js, Next.js, Node.js
  </span>
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    SQL, MongoDB
  </span>
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    Firebase, Clerk
  </span>
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    Git, GitHub, Docker
  </span>
  <span className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-default">
    Responsive Web Design
  </span>
</div>
          </div>
        </section>

       
<section id="experience" className="py-12 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      Work Experience
    </h2>
    <div className="max-w-4xl mx-auto">
      {workExperiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  </div>
</section>


<section id="education" className="py-12 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4 dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      Education
    </h2>
    <div className="max-w-4xl mx-auto">
      {education.map((edu, index) => (
        <EducationCard key={index} education={edu} />
      ))}
    </div>
  </div>
</section>

<section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            </div>
</section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
              
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
              I offer a wide range of services, including brand design, development and consulting 
            </p>
          </div>
          <div className='lg:grid lg:grid-cols-3 gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 border dark:border-gray-700'>
              <Image src={design} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-400">
                  Creating elegant designs suited for your needs following core design theory 
              </p>
              <h4 className=' py-4 text-teal-600 '>Design tools I use </h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Canva</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 border dark:border-gray-700 '>
              <Image src={consulting} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Consulting</h3>
              <p className="py-2 dark:text-gray-400">
                 Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className=' py-4 text-teal-600 '>Areas I can help with </h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Web Development</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>UI/UX Design</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>System Testing</p>
            </div><div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900 border dark:border-gray-700'>
              <Image src={code} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'> Code your dream project</h3>
              <p className="py-2 dark:text-gray-400">
                   Do you have an idea for your next great website? Let's make it a
                reality. 
              </p>
              <h4 className=' py-4 text-teal-600 '>Languages I use </h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Javascript</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>
            </div>
          </div>
        </section>
       

      </main>
    </div>
  );
}
 