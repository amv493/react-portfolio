import React from 'react'
import background from '../assets/images/background.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={background} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Anthony McKinney</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    <TypeAnimation 
                        sequence={[
                            'Front End Developer',
                            2000,
                            'Web Developer',
                            2000,
                            'Tech Enthusiast',
                            2000,
                        ]}
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', fontStyle: 'italic', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-center pt-6 max-w-[200px] w-full'>
                    <a href="https://www.linkedin.com/in/anthony-tymckinney/" target='_blank'><FaLinkedinIn className='w-[50px] flex justify-center items-center rounded-full shadow-lg bg-black shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 cursor-pointer mr-5 p-2' color='white' size={40} /></a>
                    <a href="https://github.com/amv493" target='blank'><FaGithub className='w-[50px] flex justify-center items-center rounded-full shadow-lg bg-black shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 cursor-pointer mr-5 p-2' color='white' size={40} /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main