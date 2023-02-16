import React from 'react'
import javascript from '../assets/portafolio/javascript.png'
import laravel from '../assets/portafolio/laravel.png'
import react from '../assets/portafolio/react.png'
import git from '../assets/portafolio/git.png'
import github from '../assets/portafolio/github.png'
import html from '../assets/portafolio/html.png'
import netcore from '../assets/portafolio/netcore.png'
import php from '../assets/portafolio/php.png'
import tailwind from '../assets/portafolio/tailwind.png'

function Experience() {
    const tecnologias = [
        {
            id: 1,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-400'
        },
        {
            id: 2,
            src: html,
            title: 'CSS-HTML',
            style: 'shadow-orange-400'
        },
        {
            id: 3,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 4,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-red-600'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: git,
            title: 'Git',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: netcore,
            title: '.NET CORE',
            style: 'shadow-fuchsia-600'
        },
        {
            id: 8,
            src: tailwind,
            title: 'TailwindCSS',
            style: 'shadow-sky-400'
        },
        {
            id: 9,
            src: php,
            title: 'PHP',
            style: 'shadow-violet-700'
        },
    ]
    return (
        <div name='experiencia' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4  border-gray-500 p-2 inline-flex'>Experiencia</p>
                    <p className='py-5'>estas son las tecnologías con las que he trabajado</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {tecnologias.map(({ id, src, title, style }) => (
                        <div key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience