import React from "react";

const Contact = () => {
  return (
    <div
      name="contacto"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">
            Contacto
          </h2>
          <p className="mt-6 text-lg">
            Envía el siguiente formulario para ponerte en contacto conmigo.
          </p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/da450ebc-6827-4cae-97db-8450ed092267"
            method="POST"
            className="w-full md:w-1/2 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Introduce tu Mensaje"
              className="w-full p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-1/2 text-md font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-md hover:scale-105 transform transition duration-300 mx-auto block"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
