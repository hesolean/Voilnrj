import React from 'react'
import logo from '../assets/logo.jpeg'

function Home() {
    
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-darkblue to-lightblue">
            <div className='maw-w-screen-lgms-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                 <h1 className='text-3xl text-center font-title'>
                    Bienvenue chez le fournisseur officiel de carburant pour voiliers
                </h1>
                <img className="rounded-2xl w-32 my-auto md:w-64 mx-5" src={logo} alt='logo voilnrj'/>
            </div>
        </div>
    )
}

export default Home