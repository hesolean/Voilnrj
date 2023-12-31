import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

//images
import logo from "../../assets/logo.jpeg";

//local data
import { linkList } from "../../datas/linkList";

const Navbar = () => {
  // affichage de la navbar pour le coté responsive
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-gradient-to-b from-gray to-darkblue">
      <div className="flex flex-row mx-2">
        <img className="rounded-2xl w-12" src={logo} alt="logo voilnrj" />
        <h1 className="text-3xl text-center font-title mx-2">Voilier Nrj</h1>
      </div>

      {/* hidden pour cacher suivant la largeur de l'écran */}
      <ul className="hidden md:flex">
        {/* itère sur la liste des liens du menu */}
        {linkList.map(({ title, id, name }) => (
          <li
            key={id} // la clé est obligatoire dans les listes
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            {/* utilise le smooth de react pour faire glisser la page vers la section du menu */}
            <Link to={title} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* menu hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {/* affichage du hamburger ou de la croix en fonction de l'affichage */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* affichage du menu sur les grands écrans */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-lightblue to-darkblue">
          {linkList.map(({ title, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={title}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
