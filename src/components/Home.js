import React, { useState } from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'
import Cart from './Cart'

function Home() {
    // stockage local des données du panier
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    // variable pour l'affichage des catégories pour le filtre
    const categories = windList.reduce(
        (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    return (
        <div>
            <h1 className='text-3xl mt-150 text-center font-title'>
                Bienvenue chez le fournisseur officiel de carburant pour voiliers
            </h1>
            <div>
                {/* gestion du panier */}
                <Cart
                    cart={cart}
                    updateCart={updateCart}
                />
                {/* affichage des produits */}
                <ul>
                    {windList.map(
                        ({id, name, price, cover}) =>
                        <div key={id}>
                            <WindItem
                                cover={cover}
                                name={name}
                                price={price}
                            />
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Home