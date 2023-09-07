import React, { useState } from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'
import Cart from './Cart'

function Home() {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    const categories = windList.reduce(
        (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )
    return (
        <div>
            <h1 className='text-3xl text-center font-bold underline font-title'>Bienvenue chez le fournisseur officiel de carburant pour voiliers</h1>
            <div>
                <Cart
                    cart={cart}
                    updateCart={updateCart}
                />
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