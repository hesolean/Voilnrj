import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <Contact/>
      
      <SocialLinks/>
    </>
    
  );
}

export default App;
