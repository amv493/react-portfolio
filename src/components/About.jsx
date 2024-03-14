import React, { useState, useEffect } from 'react'
import profilePic from '../assets/images/img1.jpeg'
import Skills from './Skills'

const About = () => {
    const [tab, setTab] = useState(false)

  return (
    <div id='about' className=''>
        <h1 className='text-5xl font-bold text-center text-[#001b5e] my-20 pb-10'>About Me</h1>
        <section id='container' className='grid grid-cols-2 w-[80%] m-auto justify-center'>
            <div id='left' className='w-[50%] justify-content'>
                <img src={profilePic} alt="" className='rounded-lg ml-32 mr-0 ' />
            </div>
            <div id='right' className=''>
                <h1 className='text-2xl text-center pb-5 font-bold'>Get To Know Me</h1>
                <p className='pb-5'> 
                    My name is Anthony. Since I was a kid, I have always been intrigued with technology, 
                    which has now lead me to programming. I currently call Charleston home, but I've spent 
                    a fair amount of time in different cities here in South Carolina. My hobbies include 
                    coding, gaming, working out, and creating content on YouTube. 
                </p>

                {/* <div className=' font-bold py-5'>
                    <span className='pr-7'>Skills</span>
                    <span className='px-7'>Experience</span>
                    <span className='px-7'>Education</span>
                </div> */}

                <div>
                    <h1 className='text-lg font-bold my-5'>My Education</h1>
                    <div className='my-5'>
                        <div className='flex flex-row gap-60'> 
                            <h2>College of Charleston | Charleston, SC</h2>
                            <span className='text-sm italic text-stone-500'>May 2019</span>
                        </div>
                        <span className='italic'>Bachelor of Science: Computer Information Systems</span>
                        <p className='text-xs text-stone-500'>
                            Relevant Coursework: Database Concepts, Dataset Organization & Management, 
                            Computer Programming I & II, Website Programming, Server-Side Web Programming, 
                            User Interface Development 
                        </p>
                    </div>
                    <div className='my-5'>
                        <div className='flex flex-row gap-44'>
                            <h2>Spartanburg Methodist College | Greenville, SC</h2>
                            <span className='text-sm italic text-stone-500'>May 2016</span>
                        </div>
                        <span className='italic'>Associate of Science: Computer Science</span>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-bold mt-5'>My Skills</h1>
                    <Skills />
                </div>

            </div>
        </section>

    </div>
  )
}

export default About