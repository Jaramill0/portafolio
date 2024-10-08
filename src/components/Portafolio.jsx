import React from "react";
import bot from "../assets/portafolio/bot.jpeg";
import node from "../assets/portafolio/nodejs-ar21.png";
import rickymorty from "../assets/portafolio/rickmorty.png";
import snake from "../assets/portafolio/snake.jpg";
import weather from "../assets/portafolio/weather.png";
import car from "../assets/portafolio/carrito.png";

const Portafolio = () => {
  const portafolio = [
    { id: 1, src: bot, title: "BotGame" },
    { id: 2, src: node, title: "App Votes" },
    { id: 3, src: snake, title: "SnakeGame" },
    { id: 4, src: rickymorty, title: "Web Api Rick & Morty" },
    { id: 5, src: weather, title: "API Rest Weather" },
    { id: 6, src: car, title: "E-Commerce Movies" },
  ];

  return (
    <div
      name="portafolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white py-8"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Portafolio
          </p>
          <p className="py-4">Echa un vistazo a algunos de mis trabajos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portafolio.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{title}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex-1 px-4 py-2 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-medium hover:bg-cyan-600 transition duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href="#"
                    className="flex-1 px-4 py-2 text-center bg-gray-600 rounded-md text-white font-medium hover:bg-gray-700 transition duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
