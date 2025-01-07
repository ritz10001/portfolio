import React from 'react';
import img from '../assets/IMG_4019.jpg'
import { scrollToSection } from '../utilities/utils';

const Intro = () => {
  const introText = `A passionate full-stack developer specializing in multiple technologies, both 
  frontend and backend, with almost 5 years of personal experience.`;

  return (
    <div className="something w-full mb-10 md:mb-24 overflow-y-auto px-6 pt-10 md:px-10 md:pt-20 flex flex-col md:flex-row md:items-start md:justify-between">
      <div className="text-left text-6xl md:w-1/2 mt-20 sm:mt-32">
        <h1 className="text-2xl md:text-4xl font-bold">
          Hi, I'm <span className="text-sky-400 md:text-4xl lg:4xl">Ritvik Prakash</span>
        </h1>
        <p className="text-lg text-gray-700 mt-3">{introText}</p>
        <div className="flex space-x-10 mt-10 justify-evenly md:justify-start">
            <a><button onClick={() => scrollToSection("contact")} type="button" className="box-border font-semibold bg-red-500 text-white rounded-full px-3 py-3 w-[140px] text-base shadow-lg hover:scale-105 transition-transform">Contact Me</button></a>
            <a href="public\SHPE Resume.docx" target="_blank" rel="noopener noreferrer">
              <button 
                type="button" 
                className="bg-red-500 font-semibold text-white rounded-full px-3 py-3 w-[140px] text-base shadow-lg hover:scale-105 transition-transform"
              >
                Download CV
              </button>
            </a>
        </div>
      </div>
      
      <div className="w-[100%] h-80 rounded-2xl overflow-hidden md:w-[40%] md:80 md:rounded-2xl shadow-lg mt-10 sm:mt-12 md:mt-24">
        <img 
          src={img} 
          alt="Your Name" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
