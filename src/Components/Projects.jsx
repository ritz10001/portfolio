import React from 'react'
import { projectsList } from '../Constants/index'

const Projects = ({id}) => {
  return (
    <div id={id} className="w-full px-8 mb-10 py-10 md:px-20">
      <h1 className='text-3xl font-bold text-red-500 text-center mb-5'>Projects</h1>
      {projectsList.map((project, index) => (
        <div key={index} className="hover:scale-105 transition-all hover:bg-slate-300 ease-in rounded-xl">
          <div className="w-full h-[2px] bg-gray-400 my-4" />
          <div className="flex flex-wrap p-5">
            <div className="w-full md:w-1/3 lg:w-1/4 mb-5">
                <img src={project.img} className="border-2 rounded-xl h-[150px] md:w-5/6" alt={project.name} />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 space-y-3">
                <h1 className="text-lg font-semibold">{project.name}</h1>
                <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects