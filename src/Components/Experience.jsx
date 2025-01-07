import React from 'react'
import { experienceList } from '../Constants/index'

const Experience = ({id}) => {
  return (
    <div id={id} className="w-full px-8 mb-10 py-10 md:px-20 ">
      <h1 className='text-3xl font-bold text-red-500 text-center mb-5'>Experience</h1>
      {experienceList.map((experience, index) => (
        <div key={index} className="hover:scale-105 transition-all hover:bg-slate-300 ease-in rounded-xl">
          <div className="w-full h-[2px] bg-gray-400 my-4" />      
          <div className="flex flex-wrap p-5">
            <div className="w-full md:w-1/4">
              <p className="text-md">{experience.year}</p>
            </div>
            <div className="w-full md:w-3/4">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <h1 className="text-md font-semibold">{experience.type}</h1>
                <h1 className="text-md italic">{experience.location}</h1>
              </div>
              <p className="whitespace-pre-line">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience