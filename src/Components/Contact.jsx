import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = ({id}) => {
    const serviceId = "service_wp4vy7l";
    const templateId = "template_wny24od";
    const publicKey = "VfUJaMTERyY0Fy3sO";
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        to_name: "Ritvik Prakash",
        message: message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (response) => {
              alert("Message sent successfully!");
              setFirstName(""); 
              setLastName(""); 
              setEmail(""); 
              setMessage("");
            },
            (error) => {
              alert("Something went wrong. Please check your fields or try again later.");
            }
          );
    }
  return (
    <div id={id} className="w-full px-8 py-10 mb-10 md:px-20">
        <h1 className='text-3xl font-bold text-red-500 text-center mb-5'>Contact Me</h1>
        <form onSubmit={handleSubmit} className="info w-full sm:w-3/4 lg:w-1/2 mx-auto border-2 border-pink-100 rounded-lg flex flex-col gap-5 p-5 mb-10">
            <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-lg">First Name</h1>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required type="text" className="border-2 border-black rounded-full p-2 w-full"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-lg">Last Name</h1>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} required type="text" className="border-2 border-black rounded-full p-2 w-full"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-lg">Email Address</h1>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="border-2 border-black rounded-full p-2 w-full"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-lg">Comments</h1>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} required type="text" className="border-2 border-black rounded-xl p-2 w-full"/>
            </div>
            <div className='text-center'>
                <button type="submit" className="bg-red-500 w-full sm:w-3/4 md:w-1/2 text-white rounded-full px-5 py-3 text-lg shadow-lg hover:scale-105 transition-transform">
                    Send Message
                </button>
            </div>
            <div className="flex justify-center space-x-10 pb-10 mt-5">
                <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://github.com/ritz10001" target="_blank"><FaGithub size={36}/></a>
                <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.linkedin.com/in/ritvik-prakash-702872210/" target="_blank"><FaLinkedinIn size={36}/></a>
                <a className="cursor-pointer transition-colors duration-250 hover:text-sky-500" href="https://www.instagram.com/ritz10001/" target="_blank"><FaInstagram size={36}/></a>
            </div>
        </form>
    </div>
  )
}

export default Contact
