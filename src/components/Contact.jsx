import React from 'react'

const Contact = () => {
    return (
        <div name="contacto" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                    <p className='py-6'>envíe el siguiente formulario para ponerse en contacto conmigo.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/da450ebc-6827-4cae-97db-8450ed092267" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Nombre Completo' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="email" name='email' placeholder='Correo Electronico' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2
                         rounded-md text-white focus:outline-none' placeholder='Introduce tu Mensaje'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact