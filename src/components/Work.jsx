import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2022, 
        title: 'The Citadel Military College',
        duration: '1 Year 6 Months',
        details:  
            'Successfully performed troubleshooting and diagnosed problems, ensuring accurate resolution of a wide range of technical issues. Managed end-user accounts and permissions, adhering to security best practices and policies for access rights provisioning. Proficiently removed malware, ransomware, and other threats from laptops and desktop systems. Identified hardware performance trends and common issues, providing findings for remediation.'
            
    }, 
    {
        year: 2022, 
        title: 'The Citadel Military College',
        duration: '6 Months',
        details:  
            'Created and managed tickets through the ticketing system to track and resolve end-user issues. Installed required software on end-user laptops and desktops. Effectively explained technical information to non-technical individuals for enhanced understanding. Remotely assisted users through remote access and phone calls to provide support.'
            
    }, 
    {
        year: 2021, 
        title: 'Majorel',
        duration: '1 Year',
        details:  
            'Mentored and guided new support technicians in call handling, remote troubleshooting, and customer service, with a focus on iOS devices and accessories. Established a streamlined repair/replacement process for customers. Provided top-notch customer service and technical support for our client, Apple, through our support line. Remotely assisted users through remote access and phone calls to provide support.'
    }, 
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] mx-auto mb-5 md:pl-20 p-4 py-16 my-20'>
        <h1 className='text-5xl font-bold text-center text-[#001b5e] my-20 pb-10'>My Experience</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work