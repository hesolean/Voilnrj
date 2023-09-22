import React, { useState, useEffect } from 'react'

//composants
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import Cart from './components/wind/Cart'
import WindProducts from './components/wind/WindProducts';
import NewWind from './components/wind/NewWind';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
// import Connexion from './components/Connexion';
import Login from './components/registration/Login'
import Profil from './components//registration/Profil';

function App() {
  
  // stockage local des données du panier
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  // permet de conserver le panier même après un F5 sur la page
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <>
      <Navbar/>
      <Home />
      <div name="voile" className="h-screen w-full pt-[100px] bg-gradient-to-b from-lightblue to-darkblue">
        <div className='maw-w-screen-lgms-auto justify-center h-full px-4'>
          {/* gestion du panier */}
          <Cart
              cart={cart}
              updateCart={updateCart}
          />
        </div>
      </div>
      {/* affichage des produits */}
      <WindProducts
        cart={cart} 
        updateCart={updateCart}
      />
      <Contact />
      <Login />
      <Profil />
      <NewWind />

      <Footer/>
      
      <SocialLinks/>
    </>
    
  );
}

export default App;
