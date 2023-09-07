import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-darkblue to-lightblue text-lightblue'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl front-bold inline border-b-4 border-black'>
                    Contact
                </p>
                <p className='py-6'>
                    Contactez-moi pour plus de détails sur la compatibilité avec votre matériel !
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Entrez votre nom' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                    />
                    <input 
                        type="text" 
                        name='email' 
                        placeholder='Entrez votre email' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                    />
                    <textarea 
                        name='message' 
                        rows="10" className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                    >
                    </textarea>
                    <button 
                        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                        Valider
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact