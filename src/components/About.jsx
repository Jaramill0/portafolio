import React from 'react';

const About = () => {
    return (
        <div name="acerca" className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-screen px-4 py-8 text-white">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center items-center">
                <div className="pb-8">
                    <p className="inline-block text-4xl font-bold border-b-4 border-gray-500">Sobre Mi</p>
                </div>
                <p className="text-xl mt-8 md:mt-20 text-justify max-w-4xl">
                    Soy una persona competitiva, activa, comprometida en crecer profesionalmente abarcando las nuevas tecnologías. Constantemente me encuentro aprendiendo nuevas tecnologías y desarrollando aplicaciones por placer. Me interesa incorporarme en nuevos proyectos donde pueda incrementar mis habilidades como desarrollador y mi nivel de programación.
                </p>
                <p className="text-xl mt-8 md:mt-12 text-justify max-w-4xl">
                    Me considero una persona responsable, honesta, humilde. Me gusta hacer nuevas amistades que me otorguen nuevas oportunidades, conocer nuevos sitios y lugares turísticos. Me encanta la música rock, pop, Lofi-Hip Hop y Rock Metal. También me gusta el dibujo enfocado a caricaturas y anime, el cine y las series de streaming.
                </p>
            </div>
        </div>
    );
};

export default About;
