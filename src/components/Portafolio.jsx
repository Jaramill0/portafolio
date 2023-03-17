import React from 'react'
import bot from '../assets/portafolio/bot.jpeg'
import node from '../assets/portafolio/nodejs-ar21.png'
import rickymorty from '../assets/portafolio/rickmorty.png'
import snake from '../assets/portafolio/snake.jpg'
import weather from '../assets/portafolio/weather.png'
import car from '../assets/portafolio/carrito.png'

const Portafolio = () => {
    const portafolio = [
        {
            id: 1,
            src: bot,
            title: 'BotGame',
        },
        {
            id: 2,
            src: node,
            title: 'App Votes',
        },
        {
            id: 3,
            src: snake,
            title: 'SnakeGame',
        },
        {
            id: 4,
            src: rickymorty,
            title: 'Web Api Rick & Morty',
        },
        {
            id: 5,
            src: weather,
            title: 'API Rest Weather',
        },
        {
            id: 6,
            src: car,
            title: 'E-Commerce Movies',
        },
    ]

    return (
        <div name="portafolio" className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen'>
            <div className='flex flex-col p-6 justify-center max-w-screen-lg mx-auto h-full w-full text-white z-0'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
                    <p className='py-6'>Echa un vistazo a algunos de mis trabajos</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
                    {portafolio.map(({ id, src, title }) => (
                        <div key={id} className='shadow-md rounded-lg overflow-hidden'>
                            <img src={src} alt="" className='rounded-md duration-500 hover:scale-105  w-full h-48 object-cover' />
                            <div className='px-4 py-2'>
                                <p className='text-lg font-semibold'>{title}</p>
                                <div className='flex items-center justify-center'>
                                <button className='w1/3 px-7 py-2 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/3 px-7 py-2 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )


}

export default Portafolio
