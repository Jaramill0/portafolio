import React from 'react'
import image from '../assets/profile.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <>
            <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
                <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-sm md:text-1xl lg:text-6xl font-bold text-white mb-4'>Desarrollador Web </h2>
                        <p className='text-gray-500 py-4 max-w-md min-w-0'>
                            Tengo 1 año de experiencia en el desarrollo de sistemas web, plataformas de escritorio y creación de Bots para distintos aplicativos. Me encuentro abierto a nuevas oportunidades de trabajo y enfoco mis habilidades al desarrollo web en Front End. Ocupo las tecnologías: React, Angular, Tailwind, Nextjs y Laravel.
                        </p>
                        <div>
                            <Link to='portafolio' smooth duration={800} className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer'>
                                Portafolio
                                <span className='group-hover:rotate-90 duration-200'>
                                    <MdKeyboardArrowRight size={24} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src={image}
                            alt="my profile"
                            className='w-full h-auto max-h-80 max-w-sm rounded-lg'
                            width={320}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
