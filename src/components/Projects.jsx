import React from 'react'
import ProjectItem from './ProjectItem'
import quizImage from '../assets/images/Quiz_js.png'
import pokemonImage from '../assets/images/Pokemon-Pokedex.png'
import ticTacToeImage from '../assets/images/Tic-Tac-Toe.png'
import blasteroidsImage from '../assets/images/Blasteroids.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-5xl font-bold text-center text-[#001b5e] mb-20 pb-5'>Featured Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={quizImage} title='Quizzle' lang='HTML, CSS, Javascript' link1='' link2='https://github.com/amv493/Quiz-Game-Javascript' />
            <ProjectItem img={ticTacToeImage} title='Tic Tac Toe App' link1='' link2='' />
            <ProjectItem img={pokemonImage} title='Pokemon PokeDex' lang='HTML, CSS, Javascript' link1='https://pokedexapi.up.railway.app/' link2='https://github.com/amv493/Pokedex' />
            <ProjectItem img={blasteroidsImage} title='Blasteroids' lang='HTML, CSS, Javascript' link1='' link2='https://github.com/amv493/Asteroids-Game-main' />
        </div>
        <div className='mt-5 pt-5 justify-center items-center'>
          <a href="https://github.com/amv493?tab=repositories" target='_blank'>
            <button className='bg-[#001b5e] justify-center items-center text-gray-100 mt-4 p-4 rounded-lg'>See More</button>
          </a>
        </div>
    </div>
  )
}

export default Projects