import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
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
        <div className="flex justify-between items-center w-full h-20 fixed bg-darkblue px-4">
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
            <div className='cursor-pointer pr-4 z-10 text-black'>
                <FaBars size={30}/>
            </div>
        </div>
  )
}

export default Navbar