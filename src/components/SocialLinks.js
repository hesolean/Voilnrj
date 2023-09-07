import React from 'react'
import { socialLinks } from '../datas/socialLinks'

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[15%] right-20 fixed'>
        <ul>
            {socialLinks.map(({id, href, child}) => ( 
                <li 
                    key={id}
                    className={'flex justify-between items-center w-40 h-14 px-4 mr-[-200px] hover:mr-[-50px] hover:round-md duration-300'}>
                    <a href={href} 
                        className='flex justify-between items-center w-full text-lightblue'
                        // target="_blanck" pour ouvrir une nouvelle page sur le click
                        target="_blanck"
                        >
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks