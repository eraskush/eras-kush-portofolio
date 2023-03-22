import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import deved from "../public/dev-ed-wave.png";
import Image from 'next/legacy/image';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import eras1  from "../public/eras1.jpg"
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eras Kush portofolio</title>
        <meta name="description" content="Eras Kush " />
        <meta name="image" content="/eras.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpg" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen ">
          <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white '>developedbykush</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-white'/></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'  href="#">
              Resume</a></li>
          </ul>
          </nav> 
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Eras Kush</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Trader</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>Freelancer providing 
            services for programming and forex trading. Join me down below and let's get the bag</p>
          </div>
          <div className='flex text-5xl justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' >
            <Image src={eras1} alt="" layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a freelance developer and trader, I've
              done remote work for <span className='text-teal-500'>agencies</span> consulted for  
              <span className='text-teal-500'> startups</span> and collaborated with talented people to create digital products for both
              business and consumer use
            </p>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
              I offer a wide range of services, including brand design, programming and trading 
            </p>
          </div>
          <div className='lg:grid lg:grid-cols-3 gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700'>
              <Image src={design} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-400">
                  Creating elegant designs suited for your needs following core design theory 
              </p>
              <h4 className=' py-4 text-teal-600 '>Design tools I use </h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700'>
              <Image src={consulting} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Consulting</h3>
              <p className="py-2 dark:text-gray-400">
                 Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className=' py-4 text-teal-600 '>Design tools I use </h4>
             <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div><div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-700'>
              <Image src={code} alt="" width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'> Code your dream project</h3>
              <p className="py-2 dark:text-gray-400">
                   Do you have an idea for your next great website? Let's make it a
                reality. 
              </p>
              <h4 className=' py-4 text-teal-600 '>Languages I use </h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white '>Portofolio</h3>
             <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a freelance developer and trader, I've
              done remote work for <span className='text-teal-500'>agencies</span> consulted for  
              <span className='text-teal-500'> startups</span> and collaborated with talented people to create digital products for both
              business and consumer use
            </p>
             <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer a wide range of services, including brand design, programming and trading 
            </p>
          </div>
          <div className='relative flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} alt="" className="rounded-lg object-cover" width={'100'} height="100" layout="responsive"/>
            </div>
             <div className='basis-1/3 flex-1' >
              <Image src={web2} alt="" className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
            </div> <div className='basis-1/3 flex-1'>
              <Image src={web3} alt="" className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
            </div> <div className='basis-1/3 flex-1'>
              <Image src={web4} alt="" className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
            </div> <div className='basis-1/3 flex-1'>
              <Image src={web5} alt="" className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
            </div> <div className='basis-1/3 flex-1'>
              <Image src={web6} alt="" className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
 