import React, { useState, useEffect } from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import WindProducts from './components/WindProducts';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Footer/>
      
      <SocialLinks/>
    </>
    
  );
}

export default App;
