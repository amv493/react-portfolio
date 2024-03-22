import React, { useState } from 'react'
import image1 from '../assets/images/html.png'
import image2 from '../assets/images/css.png'
import image3 from '../assets/images/javascript.png'
import image4 from '../assets/images/react.png'
import image5 from '../assets/images/typescript.png'
import image6 from '../assets/images/tailwind.png'
import image7 from '../assets/images/php.png'
import image8 from '../assets/images/java.png'
import image9 from '../assets/images/wordpress.png'
import hImage1 from '../assets/images/inverted-images/html.png'
import hImage2 from '../assets/images/inverted-images/css.png'
import hImage3 from '../assets/images/inverted-images/javascript.png'
import hImage4 from '../assets/images/inverted-images/react.png'
import hImage5 from '../assets/images/inverted-images/typescript.png'
import hImage6 from '../assets/images/inverted-images/tailwind.png'
import hImage7 from '../assets/images/inverted-images/php.png'
import hImage8 from '../assets/images/inverted-images/java.png'
import hImage9 from '../assets/images/inverted-images/wordpress.png'


const Skills = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        {
            id: 1, 
            img: image1,
            name: 'HTML 5', 
            class: 'hover:bg-orange-500', 
            hoverImg: hImage1
        },
        {
            id: 2, 
            img: image2,
            name: 'CSS 3',
            class: 'hover:bg-blue-500',
            hoverImg: hImage2
        },
        {
            id: 3, 
            img: image3,
            name: 'Javascript',
            class: 'hover:bg-yellow-500',
            hoverImg: hImage3
        },
        {
            id: 4, 
            img: image4,
            name: 'React',
            class: 'hover:bg-cyan-400',
            hoverImg: hImage4
        },
        {
            id: 5, 
            img: image5,
            name: 'Typescript',
            class: 'hover:bg-sky-600',
            hoverImg: hImage5
        },
        {
            id: 6, 
            img: image6,
            name: 'Tailwind',
            class: 'hover:bg-sky-500',
            hoverImg: hImage6
        },
        {
            id: 7, 
            img: image7,
            name: 'PHP',
            class: 'hover:bg-violet-500',
            hoverImg: hImage7
        },
        {
            id: 8, 
            img: image8,
            name: 'Java',
            class: 'hover:bg-orange-500',
            hoverImg: hImage8
        },
        {
            id: 9, 
            img: image9,
            name: 'Wordpress',
            class: 'hover:bg-sky-600',
            hoverImg: hImage9
        },
    ]

  return (
    <div>
        <div className='grid grid-cols-3 gap-8 mt-10 m-auto max-sm:grid-cols-1 max-lg:grid-cols-2'>
            {images.map((image) => (
                <div 
                key={image.id} 
                className={`h-full w-full flex flex-col items-center justify-center rounded-full p-2 mr-5 shadow-xl bg-zinc-100 ${image.class} hover:text-white transition duration-300 ease-in-out`}
                onMouseEnter={() => setHoveredImage(image.hoverImg)}
                onMouseLeave={() => setHoveredImage(null)}
                >
                    <img src={hoveredImage === image.hoverImg ? image.hoverImg : image.img} 
                    alt={image.name} 
                    className='w-4/12 h-4/12  mt-5 mb-4 justify-center items-center ' 
                    />
                    <h2 className='text-lg pb-5'>{image.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills