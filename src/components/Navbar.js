import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            title: 'home'
        },
        {
            id: 2,
            title: 'description'
        },{
            id: 3,
            title: 'details'
        },{
            id: 4,
            title: 'contact'
        }
    ]
  return (
        <div className="flex justify-between items-center w-full h-20 fixed bg-gradient-to-b from-lightblue to-darkblue">
            <h1 className='text-3xl text-center font-title'>Voilier Nrj</h1>
            
            {/* hidden pour cacher suivant la largeur de l'écran */}
            <ul className='hidden md:flex'>
                {links.map(({title, id}) => (
                    <li 
                        key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>
                            {title}
                    </li>

                ))}
            </ul>
            {/* menu hamburger */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-black md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-lightblue to-darkblue'>
                    {links.map(({title, id}) => (
                            <li 
                                key={id}
                                className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                                    {title}
                            </li>))}
            </ul>
            )}
            
        </div>
  )
}

export default Navbar