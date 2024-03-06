import React from "react";
import image from "../assets/profile.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full md:w-1/2">
            <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-white mb-4 font-sans sm:font-serif md:mb-2">
              Desarrollador Web
            </h2>
            <p className="text-gray-400 py-4 max-w-md min-w-0 font-sans sm:font-serif md:text-lg lg:text-xl xl:text-2xl">
              Tengo 2 años de experiencia en el desarrollo de sistemas web,
              plataformas de escritorio y creación de Bots para distintos
              aplicativos. Además, tengo experiencia en el área de Soporte TI
              llevando a cabo implementaciones en grandes empresas en la red de
              Servicio Administrativo Tributario (SAT). Me encuentro abierto a
              nuevas oportunidades de trabajo y enfoco mis habilidades al
              desarrollo web en Front End. Ocupo las tecnologías: React,
              Angular, Tailwind, Nextjs y Laravel.
            </p>
            <div>
              <Link
                to="portafolio"
                smooth
                duration={800}
                className="group text-white inline-flex items-center justify-center px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer font-sans sm:font-serif md:text-lg lg:text-xl xl:text-2xl"
              >
                Portafolio
                <span className="group-hover:rotate-90 ml-1 transition duration-200">
                  <MdKeyboardArrowRight size={24} />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={image}
              alt="my profile"
              className="w-full h-auto md:max-h-90 max-w-sm md:rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
