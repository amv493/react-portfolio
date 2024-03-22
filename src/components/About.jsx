import React, { useState, useEffect } from 'react'
import profilePic from '../assets/images/img1.jpeg'
import Skills from './Skills'
import EducationList from './EducationList'

const About = () => {
    const data = [
        {
            year: '05/2019', 
            title: 'College of Charleston | Charleston, SC',
            degree: 'Bachelors of Science: Computer Information Systems',
            details:  
                'Relevant Coursework: Database Concepts, Dataset Organization & Management, Computer Programming I & II, Website Programming, Server-Side Web Programming, User Interface Development '              
        }, 
        {
            year: '05/2016', 
            title: 'Spartanburg Methodist College | Greenville, SC',
            degree: 'Associate of Science: Computer Science',
            details:  
                ''              
        }, 
    ]

  return (
    <div id='about' className='grid max-lg:grid-col-1'>
        <h1 className='text-5xl font-bold text-center text-[#001b5e] my-20 pb-10'>About Me</h1>
        <section id='container' className='grid grid-cols-2 w-[80%] m-auto justify-center max-lg:flex max-lg:flex-col '>
            <div id='left' className='w-[70%] justify-center'>
                <img src={profilePic} alt="" className='rounded-lg ml-24 mr-0 ' />
            </div>
            <div id='right' className=''>
                <h1 className='text-2xl text-center pb-5 font-bold max-lg:mt-20'>Get To Know Me</h1>
                <p className='pb-5 mb-10 text-2xl max-[1650px]:text-base'> 
                    My name is Anthony. I currently call Charleston home, but I've spent 
                    a fair amount of time in different cities here in South Carolina. My hobbies include 
                    coding, gaming, working out, and creating content on YouTube. 
                </p>
                <p className='pb-5 mb-10 text-2xl max-[1650px]:text-base'>
                    Since I was a kid, I have always been intrigued with technology, which has now lead 
                    me to coding. I first got into coding when I attended the College of Charleston, with 
                    the interest to want to create websites & possibly video games. During this time, I 
                    began to delve into tech even more. After college I persued a job in tech, which first 
                    started at my job at Majorel were I assisted Apple user's with troubleshooting issues 
                    with their devices. I eventually landed at the Citadel, where I began to grow my 
                    knowledge base more on hardware & software. During this time, I began doing a lot more 
                    coding projects during my free time. It's become a favorite hobby of mine and now 
                    the career I wish to persue. I've discovered my passion in Front-End Developement & 
                    have worked on several projects to grow my skills. 
                </p>
            </div>
        </section>

        <div className='w-[65%] mt-44 mx-auto justify-center items-center text-center max-lg:flex max-lg:flex-col'>
            <h1 className='text-4xl w-3/12 max-md:w-8/12 lg:w-4/12 ms:w-10/12 font-bold p-3 text-center justify-center items-center max-xl:w-full'>My Education</h1> 
        </div>
        <section className='max-w-[1040px] mx-auto mb-5 md:pl-20 p-4 py-16'>
            <div>
                {data.map((item, idx) => (
                    <EducationList 
                        key={idx} 
                        year={item.year} 
                        title={item.title} 
                        degree={item.degree} 
                        details={item.details} 
                    />
            ))}
            </div>
        </section>
        <div className='w-[73%] mt-20 mx-auto justify-center items-center text-center max-lg:flex max-lg:flex-col'>
            <h1 className='text-4xl w-2/12 max-md:w-8/12 lg:w-4/12 font-bold mb-10 p-3 justify-center items-center '>Skills</h1>
        </div>
        <section className='w-[55%] mx-auto justify-center items-center max-lg:flex max-lg:flex-col'>
            <Skills />
        </section>

    </div>
  )
}

export default About