import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            id: 1,
            title: 'Home',
            target: 'home'
        },
        {
            id: 2,
            title: 'Acerca',
            target: 'acerca'
        },
        {
            id: 3,
            title: 'Portafolio',
            target: 'portafolio'
        },
        {
            id: 4,
            title: 'Experiencia',
            target: 'experiencia'
        },
        {
            id: 5,
            title: 'Contacto',
            target: 'contacto'
        },
    ];

    return (
        <nav className="bg-black fixed w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 z-50">
                    <h1 className="text-4xl font-signature text-white tracking-wider">Jaramillo</h1>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <ul className="hidden md:flex md:items-center">
                        {links.map(({ id, title, target }) => (
                            <li key={id} className="mx-3">
                                <Link
                                    activeClass="text-gray-300"
                                    to={target}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-gray-400 hover:text-white font-medium tracking-wide uppercase text-sm cursor-pointer"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <ul className="pt-2 pb-3 space-y-1">
                        {links.map(({ id, title, target }) => (
                            <li key={id}>
                                <Link
                                    activeClass="bg-gray-900 text-white"
                                    to={target}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
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
}

export default Navbar;
