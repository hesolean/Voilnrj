import React, { useState } from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import WindProducts from './components/WindProducts';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  
  // stockage local des données du panier
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  

  return (
    <>
      <Navbar/>
      <Home />
      <div name="cart" className="h-screen w-full pt-[100px] bg-gradient-to-b from-lightblue to-darkblue">
        <div className='maw-w-screen-lgms-auto justify-center h-full px-4'>
          {/* gestion du panier */}
          <Cart
              cart={cart}
              updateCart={updateCart}
          />
        </div>
      </div>
      {/* affichage des produits */}
      <WindProducts/>
      <Contact />
      
      <SocialLinks/>
    </>
    
  );
}

export default App;
