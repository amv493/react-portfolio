import React from 'react'
import { FiX } from 'react-icons/fi'

const Modal = ({project, onClose}) => {
    if (!project) return null

    const { img, title, content, link1, link2, lang1, lang2, lang3, lang4, lang5 } = project

  return (
    <div onClick={onClose} className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className='flex fixed flex-col md:flex-row max-w-screen-xl w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden'>
            <img src={img} alt="" className='w-full md:w-1/2 object-cover'/>
            <div className='w-full md:w-1/2 p-4'>
                <p onClick={onClose} className='fixed top-[8px] right-[8px] mt-2 mr-2 cursor-pointer'>
                    <FiX size={20} />
                </p>
                <div className='flex flex-col justify-center text-center mt-3 py-1 px-2'>
                    <h3 className='text-xl font-semibold mt-10'>{title}</h3>
                    <p className='mt-5 mx-10 text-left'>{content}</p>
                    <div className='h-full w-[90%] flex items-center justify-center mt-5 mx-5 p-2'>
                        {lang1 && <p className='h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100'>{lang1}</p>}
                        {lang2 && <p className='h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100'>{lang2}</p>}
                        {lang3 && <p className='h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100'>{lang3}</p>}
                        {lang4 && <p className='h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100'>{lang4}</p>}
                        {lang5 && <p className='h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100'>{lang5}</p>}
                    </div>
                </div>
                <div className='flex mt-5 mx-10 justify-center items-center'>
                    {link1 && (<div className='mr-5'>
                        <a href={link1} target='_blank' >
                            <p className=' w-full text-center py-1 px-6 rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-50 font-bold cursor-pointer text-lg'>Demo</p>
                        </a>
                    </div>)}
                    {link2 && (<div className=''>
                        <a href={link2} target='_blank' >
                            <p className='w-full text-center py-1 px-6 rounded-full border-2 border-white bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-50 font-bold cursor-pointer text-lg'>Source</p>
                        </a>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal