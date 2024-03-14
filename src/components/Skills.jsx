import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai' 
import { FaReact, FaCss3 } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb' 
import { SiTailwindcss } from 'react-icons/si'
import image1 from '../assets/images/html.png'
import image2 from '../assets/images/css.png'
import image3 from '../assets/images/javascript.png'
import image4 from '../assets/images/react.png'
import image5 from '../assets/images/typescript.png'
import image6 from '../assets/images/tailwind.png'


const Skills = () => {

    const images = [
        {
            id: 1, 
            img: image1,
            name: 'HTML'
        },
        {
            id: 2, 
            img: image2,
            name: 'CSS'
        },
        {
            id: 3, 
            img: image3,
            name: 'Javascript'
        },
        {
            id: 4, 
            img: image4,
            name: 'React'
        },
        {
            id: 5, 
            img: image5,
            name: 'Typescript'
        },
        {
            id: 6, 
            img: image6,
            name: 'Tailwind'
        },
    ]

  return (
    <div>
        <div className='grid grid-cols-3 mt-10 m-auto'>
            {images.map((image) => (
                <div key={image.id} className='justify-center items-center'>
                    <img src={image.img} alt={image.name} className='w-4/12 h-4/12  my-10 border-4 border-white' />
                    <h2 className=''>{image.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills