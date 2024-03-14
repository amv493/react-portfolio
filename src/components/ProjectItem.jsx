import React from 'react'

const ProjectItem = ({img, title, lang, link1, link2}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'> 
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{lang}</p>
            <div className='flex flex-row justify-between'>
              <a href={link1} target='_blank'>
                  <p className='text-center py-1 px-6 mx-5 mt-5 rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-50 font-bold cursor-pointer text-lg'>Demo</p>
              </a>
              <a href={link2} target='_blank'>
                  <p className='text-center py-1 px-6 mx-5 mt-5 rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-50 font-bold cursor-pointer text-lg'>Source</p>
              </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem