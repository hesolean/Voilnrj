import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const socialLinks = [
    {
        id: 1,
        href: 'http://www.linkedin.com/in/helenedubourg',
        child: (
            <>
                <FaLinkedin size={30}/> LinkedIn
            </>
        )
    },
    {
        id: 2,
        href: 'https://github.com/hesolean',
        child: (
            <>
                <FaGithub size={30}/> Github 
            </>
        )
    },
    {
        id: 3,
        href: 'mailto:lndubourg@gmail.com',
        child: (
            <>
                <HiOutlineMail size={30}/> Mail
            </>
        )
    },
    {
        id: 4,
        href: 'https://github.com/hesolean/CVhtml.git',
        child: (
            <>
                <BsFillPersonLinesFill size={30}/> Contact 
            </>
        )
    }
]