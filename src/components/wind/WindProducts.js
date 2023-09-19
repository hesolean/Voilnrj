import React, { useState, useEffect } from 'react'

import axios from 'axios'

import WindItem from './WindItem'
import Categories from './Categories'

const WindProducts = ({ cart, updateCart }) => {
    // variable pour l'affichage des catégories pour le filtre
    const [activeCategory, setActiveCategory] = useState('')

    const [winds, setWinds] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:8080/winds`)
        .then((res) => {
          setWinds(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    /**
     * ajoute des éléments dans le panier
     * @param {string} name 
     * @param {number} price 
     */
    function addToCart(name, price) {
		const currentWindAdded = cart.find((wind) => wind.name === name)
		if (currentWindAdded) {
			const cartFilteredCurrentWind = cart.filter(
				(wind) => wind.name !== name
			)
			updateCart([
				...cartFilteredCurrentWind,
				{ name, price, amount: currentWindAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
        alert("Ajouté à la voile !")
	}

    function totalDelete(id) {
        axios.delete(`http://localhost:8080/winds/${id}`).then(res => {
            alert("Vent supprimé définitivement !")
        }).catch(err => {
            console.error('Erreur lors de la suppression :', err.res)
        })
    }
  return (
    <div 
        name="windProducts" 
        className='w-full flex flex-wrap pt-[100px] bg-gradient-to-b from-darkblue to-lightblue' 
    >
        <Categories
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
		/>
        
        <ul className='flex flex-wrap m-30'>
            {winds.map(
                ({id, windName, windPrice, windCover, category}) =>
                !activeCategory || activeCategory === category ? (
                    <div key={id} className='flex flex-col justify-center items-center'>
                        <WindItem
                            windCover={windCover}
                            windName={windName}
                            windPrice={windPrice}
                        /> 
                        <button 
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                            onClick={() => addToCart(windName, windPrice)}
                        >
                            Ajouter à la voile
                        </button>
                        <button 
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                            onClick={() => totalDelete(id)}
                        >
                            Supprimer de la gamme
                        </button>
                    </div>
                ) : null 
            )}
        </ul>
    </div>
  )
}

export default WindProducts