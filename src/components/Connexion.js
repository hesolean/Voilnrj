import React from 'react'

const Connexion = () => {
  return (
    <div name="connexion" className='w-full bg-gradient-to-b from-darkblue to-lightblue text-dark md:h-screen'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl front-bold inline border-b-4 border-black'>
                    Connexion
                </p>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <form className='flex flex-col w-full md:w-1/2'>
                    <label 
                        htmlFor='identifiant' 
                        className='text-3xl mb-3'
                    >
                        Identifiant
                    </label>
                    <input 
                        type='email' 
                        id='identifiant' 
                        name='identifiant' 
                        placeholder='Entrez votre email' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                    />
                    <label 
                        htmlFor='password' 
                        className='text-3xl mb-3 mt-8'
                    >Mot de passe</label>
                    <input  
                        type='text' 
                        id='password' 
                        name='password' 
                        placeholder='Entrez votre mot de passe' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                    />
                    <button
                        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Connexion