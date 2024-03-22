import React, { useState } from 'react'
import ProjectItem from './ProjectItem'
import Modal from './Modal'
import quizImage from '../assets/images/Quiz_js.png'
import pokemonImage from '../assets/images/Pokemon-Pokedex.png'
import blasteroidsImage from '../assets/images/Blasteroids.png'
import educationImage from '../assets/images/Education-Website.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-5xl font-bold text-center text-[#001b5e] mb-20 pb-5'>Featured Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={educationImage} title='Education Website' onClick={() => openModal({ img: educationImage, title: 'Education Website', content: 'A educational website for people looking to get a college education. Get information on a wide array of classes, prices, faculty and more! Built using React & CSS. ', lang1: 'React', lang2: 'CSS', link1: '', link2: ''})} />
            <ProjectItem img={blasteroidsImage} title='Blasteroids' onClick={() => openModal({ img: blasteroidsImage, title: 'Blasteroids', content: 'An old school arcade style browser game based on the popular Asteroids game. Blast away asteroids as you go through endless levels to ger the highest score! Built with ES6 syntax.', lang1: 'HTML', lang2:'CSS', lang3: 'Javascript', link1: 'https://github.com/amv493/Asteroids-Game-main', link2: 'https://github.com/amv493/Asteroids-Game-main'})} />
            <ProjectItem img={quizImage} title='Quizzle' onClick={() => openModal({ img: quizImage, title: 'Quizzle', content: 'A quiz app that uses ES6 syntax. Test through several coding questions to aim for a perfect score. ', lang1: 'HTML', lang2: 'CSS', lang3: 'Javascript', link1: 'https://github.com/amv493/Quiz-Game-Javascript', link2: 'https://github.com/amv493/Quiz-Game-Javascript'})} />
            <ProjectItem img={pokemonImage} title='Pokemon PokeDex' onClick={() => openModal({ img: pokemonImage, title: 'Pokemon PokeDex', content: 'Worked in a two-person team over the course of 8-weeks to create & design a Pokémon catalogue application that lists the 1000+ Pokémon throughout the series broken down by each generation the Pokémon appeared in, and information on the Pokémon based on the video games information. The application also allows for the sorting of the Pokémon based on their types, names, region, and ID, while also offering a search option to find specific Pokémon within the catalogue. Built using ES6 syntax & CSS. ', lang1: 'HTML', lang2: 'CSS', lang3: 'Javascript', link1: 'https://pokedexapi.up.railway.app/', link2: 'https://github.com/amv493/Pokedex' })} />
        </div>
        <Modal project={selectedProject} onClose={closeModal} className=''/>
        <div className='flex flex-col mt-5 pt-5 justify-center items-center'>
          <a href="https://github.com/amv493?tab=repositories" target='_blank'>
            <button className='bg-[#001b5e] justify-center items-center text-gray-100 mt-10 p-4 rounded-lg'>See More</button>
          </a>
        </div>
    </div>
  )
}

export default Projects