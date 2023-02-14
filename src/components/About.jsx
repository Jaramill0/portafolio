import React from 'react'

const About = () => {
    return (
        <div name="acerca" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre Mi</p>
                </div>
                <p className='text-xl mt-20'>
                    Soy una persona competitiva, activa, comprometida en crecer profesionalmente abarcando a las nuevas tecnologías, 
                    además de aprender tecnologías enfocadas al desarrollo Full Stack,
                     me interesa incorporarme en nuevos proyectos de formar de incrementar mis habilidades como desarrollador y mi nivel de programación.
                </p>
                <br />
                <p className='text-xl'>
                    Me considero una persona responsable, honesta, humilde, me gusta hacer nuevas amistades que me otorguen nuevas oportunidades
                    conocer nuevos sitios y lugares turísticos, me encanta la música rock, pop, Lofi-Hip Hop y Rock Metal, me encanta el dibujo enfocado
                    a caricaturas y anime, el cine y series de streaming.
                </p>
            </div>
        </div>
    )
}

export default About