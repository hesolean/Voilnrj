import React, { useState } from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'
import Categories from './Categories'

const WindProducts = ({ cart, updateCart }) => {
    // variable pour l'affichage des catégories pour le filtre
    const [activeCategory, setActiveCategory] = useState('')

    const categories = windList.reduce(
        (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

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

  return (
    <div 
        name="windProducts" 
        className='w-full flex flex-wrap pt-[100px] bg-gradient-to-b from-darkblue to-lightblue' 
    >
        <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
		/>

        <ul className='flex flex-wrap m-30'>
            {windList.map(
                ({id, name, price, cover, category}) =>
                !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <WindItem
                            cover={cover}
                            name={name}
                            price={price}
                        /> 
                        <button 
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                            onClick={() => addToCart(name, price)}
                        >
                            Ajouter à la voile
                        </button>
                    </div>
                ) : null 
            )}
        </ul>
    </div>
  )
}

export default WindProducts