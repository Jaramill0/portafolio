import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, title: "Home", target: "home" },
    { id: 2, title: "Acerca", target: "acerca" },
    { id: 3, title: "Portafolio", target: "portafolio" },
    { id: 4, title: "Experiencia", target: "experiencia" },
    { id: 5, title: "Contacto", target: "contacto" },
  ];

  // Detectar si se ha hecho scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1
            className={`text-4xl font-signature text-white transition-transform duration-300 ${
              isOpen ? "transform translate-x-0" : "transform translate-x-0"
            } md:translate-x-0`}
          >
            Jaramillo
          </h1>

          {/* Botón del menú en móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none transition duration-300 ease-in-out"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Enlaces para pantallas medianas y grandes */}
          <ul className="hidden md:flex md:items-center">
            {links.map(({ id, title, target }) => (
              <li key={id} className="mx-3">
                <Link
                  to={target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white font-medium tracking-wide uppercase text-sm cursor-pointer transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-black shadow-lg transition-all duration-300">
          <ul className="pt-2 pb-3 space-y-1">
            {links.map(({ id, title, target }) => (
              <li key={id}>
                <Link
                  to={target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Cerrar el menú cuando se hace clic
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
