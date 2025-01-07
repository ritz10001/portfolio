import React from 'react'

const About = ({id}) => {
  // bg-blue-100
  return (
    <div id={id} className="w-full px-8 mb-10 py-10 md:px-20">
      <h1 className='text-3xl font-bold text-red-500 text-center'>About Me</h1>
      <p className="text-lg text-start text-gray-700 mt-4">
        I'm a full-stack developer passionate about building scalable and efficient applications.
        I have plenty of experiece with multiple programming languages and frameworks spanning both the frontend and backend.
        Over the past few months, I have built multiple projects that make use of different tech stacks such as the MERN stack and the .NET 
        framework.
      </p>
      <p className="text-lg text-start text-gray-700 mt-4">Currently, I am junior studying Computer Science in Texas Tech University, which is based in Lubbock, TX. I am looking for internships to 
      not just put my current skills into good use, but also learn from potential mentors and gain valuable experience in the work industry.</p>
      <p className="text-lg text-start text-gray-700 mt-4">As far as programming languages and technologies are concerned, I have listed them below under
        the technologies section.
      </p>
    </div>
  )
}

export default About
