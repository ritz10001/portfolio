import React, { useState } from 'react'
import { MdFolderZip } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { scrollToSection } from '../utilities/utils';

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);

  const ToggleHamburger = () => {
    setIsHamburger(!isHamburger);
  }
  return (
    <nav className="w-full p-5 fixed top-0 flex items-center justify-between shadow-md z-50 bg-white">
        <div className="flex items-center space-x-4 cursor-pointer">
            <h1 className="text-2xl font-semibold font-lavish">Ritvik Prakash</h1>
            <img width="30" height="30" src="https://img.icons8.com/fluency/48/portfolio.png" alt="portfolio"/>
        </div>
        <ul className="hidden md:flex md:gap-5 lg:gap-7">
          <li>
            <a onClick = {() => scrollToSection("about")} className="hover:scale-105 ease-in rounded-xl cursor-pointer uppercase font-semibold relative inline-block bg-red-500 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-200 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
              About Me
            </a>
          </li>
          <li>
            <a onClick = {() => scrollToSection("experience")} className="hover:scale-105 ease-in rounded-xl cursor-pointer uppercase font-semibold relative inline-block bg-red-500 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-200 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
              Experience
            </a>
          </li>
          <li>
            <a onClick = {() => scrollToSection("projects")} className="hover:scale-105 ease-in rounded-xl cursor-pointer uppercase font-semibold relative inline-block bg-red-500 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-200 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
              Projects
            </a>
          </li>
          <li>
            <a onClick = {() => scrollToSection("technologies")} className="hover:scale-105 ease-in rounded-xl cursor-pointer uppercase font-semibold relative inline-block bg-red-500 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-200 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
              Technologies
            </a>
          </li>
          <li>
            <a onClick = {() => scrollToSection("contact")} className="hover:scale-105 ease-in rounded-xl cursor-pointer uppercase font-semibold relative inline-block bg-red-500 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-200 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
              Contact
            </a>
          </li>
        </ul>
        <ul className="hidden lg:flex gap-5 md:gap-7">
            <li><a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://github.com/ritz10001" target="_blank"><FaGithub size={24}/></a></li>
            <li><a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.linkedin.com/in/ritvik-prakash-702872210/" target="_blank"><FaLinkedinIn size={24}/></a></li>
            <li><a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.instagram.com/ritz10001/" target="_blank"><FaInstagram size={24}/></a></li>
        </ul>
        <div onClick={() => ToggleHamburger()} className="md:hidden space-y-1 cursor-pointer">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
        {isHamburger && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col">
          <div className="pt-5 px-5 flex justify-end">
            <RxCross1 
              size={24} 
              color='red' 
              className="cursor-pointer" 
              onClick={() => ToggleHamburger()}
            />
          </div>
          
          <ul className="mt-10 mb-10 flex flex-col space-y-10 text-center">
            <li>
              <a onClick = {() => {scrollToSection("about"); setIsHamburger(false);}} className="cursor-pointer uppercase font-semibold relative inline-block bg-gradient-to-r from-pink-500 to-pink-600  bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-300 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
                About Me
              </a>
            </li>
            <li>
              <a onClick = {() => {scrollToSection("experience"); setIsHamburger(false);}} className="cursor-pointer uppercase font-semibold relative inline-block bg-gradient-to-r from-pink-500 to-pink-600 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-300 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
                Experience
              </a>
            </li>
            <li>
              <a onClick = {() => {scrollToSection("projects"); setIsHamburger(false);}} className="cursor-pointer uppercase font-semibold relative inline-block bg-gradient-to-r from-pink-500 to-pink-600 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-300 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
                Projects
              </a>
            </li>
            <li>
              <a onClick = {() => {scrollToSection("technologies"); setIsHamburger(false);}} className="cursor-pointer uppercase font-semibold relative inline-block bg-gradient-to-r from-pink-500 to-pink-600 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-300 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
                Technologies
              </a>
            </li>
            <li>
              <a onClick = {() => {scrollToSection("contact"); setIsHamburger(false);}} className="cursor-pointer uppercase font-semibold relative inline-block bg-gradient-to-r from-pink-500 to-pink-600 bg-[position:0_0] bg-[length:0%_100%] bg-no-repeat text-transparent bg-clip-text hover:bg-[length:100%_100%] transition-all duration-300 [text-shadow:0_0_0_#000] hover:[text-shadow:0_0_0_transparent]">
                Contact
              </a>
            </li>
          </ul>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <div className="text-center px-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Let's Build Something Together</h2>
            <p className="text-gray-600">Open to new opportunities and collaborations</p>
          </div>

          <div className="text-center">
            <p onClick={() => {scrollToSection("contact"); setIsHamburger(false);}} className="text-sm text-gray-500 mb-10 font-semibold">Connect With Me</p>
            <div className="flex justify-center space-x-10 pb-10">
              <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://github.com/ritz10001" target="_blank"><FaGithub size={36}/></a>
              <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.linkedin.com/in/ritvik-prakash-702872210/" target="_blank"><FaLinkedinIn size={36}/></a>
              <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.instagram.com/ritz10001/" target="_blank"><FaInstagram size={36}/></a>
            </div>
          </div>
        </div>
        
      )}
    </nav>
  )
}

export default Navbar
