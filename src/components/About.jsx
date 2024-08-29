import React from "react";

const About = () => {
  return (
    <div
      name="acerca"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-screen flex flex-col justify-center items-center text-white p-5"
    >
      <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Sobre Mí
          </h2>
        </div>
        <div className="space-y-6 text-justify max-w-4xl mx-auto leading-relaxed">
          <p className="text-xl">
            Soy una persona competitiva, activa, comprometida en crecer en lo
            personal y profesionalmente, abarcando las nuevas tecnologías.
            Constantemente me encuentro aprendiendo nuevas tecnologías y
            desarrollando aplicaciones por placer. Me interesa incorporarme en
            nuevos proyectos donde pueda incrementar mis habilidades como
            desarrollador y mi nivel de programación.
          </p>
          <p className="text-xl">
            Me considero una persona responsable, honesta, humilde. Me gusta
            hacer nuevas amistades que me otorguen nuevas oportunidades, conocer
            nuevos sitios y lugares turísticos. Me encanta la música rock, pop,
            Lofi-Hip Hop y Rock Metal. También me gusta el dibujo enfocado a
            caricaturas y anime, el cine y las series de streaming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
