import React from 'react'

const ProjectItem = ({img, title, link1, link2, onClick}) => {

  return (
    <div className='relative group overflow-hidden rounded-xl'>
      <div className='relative h-auto w-full shadow-xl shadow-gray-400 rounded-xl group-hover:scale-110 transform transition duration-300'>
        <img src={img} alt="" className='rounded-xl' />
        <div className='hidden group-hover:block absolute top-0 left-0 w-full h-full bg-[#001b53] opacity-70'></div>
          <div className='absolute inset-0 flex items-center justify-center text-white'>
            <div className='text-center opacity-[-100] group-hover:opacity-100 transition-opacity'>
              <h3 className='text-2xl pb-4 pt-2'>{title}</h3>
              <div className='flex justify-center'>
                <button onClick={() => onClick({ img, title, link1, link2 })} className='text-center py-2 px-4 rounded-xl w-[125px] border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-50 font-bold cursor-pointer text-lg'>More Info</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectItem