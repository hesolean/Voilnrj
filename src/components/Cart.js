import { useState, useEffect } from "react"
import { BiWind } from 'react-icons/bi'
import { GiTornado } from 'react-icons/gi'
import { WiDayCloudyWindy } from 'react-icons/wi'

function Cart ({cart, updateCart}) {
    // constante pour ouvrir ou fermer le panier (la voile), fermé par défaut
    const [isOpen, setIsOpen] = useState(false)

    // calcul du total du panier
    const total = cart.reduce(
        (acc, windType) => acc + windType.amount * windType.price,
        0
    )

    //met à jour le nom de la page en fonction de la valeur du panier
    useEffect(() => {
        document.title = `Voilnrj : ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        // affiche le bouton fermer si le panier est ouvert et vice versa
        <div name="cart">
            <button 
                className="group w-fit px-6 py-3 my-2 flex rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer"
                onClick={() => setIsOpen(false)}>
                Fermer la voile
                <span className="group-hover:translate-x-1 duration-300">
                    <WiDayCloudyWindy size={25} className="ml-1"/>
                </span>
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Voile</h2>
                    <ul>
                        {/* on passe en revue les éléments du panier pour les afficher */}
                        {cart.map(({name,price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ * {amount}
                            </div>
                        ))}
                    </ul>
                    {/* affiche le total */}
                    <h3>Total : {total}€</h3>
                    {/* bouton pour vider le panier */}
                    <button 
                        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer"
                        onClick={() => updateCart([])}
                    >
                        Vider la voile
                    </button>
                    <span className="group-hover:translate-x-1 duration-300">
                        <GiTornado size={25} className="ml-1"/>
                    </span>
                </div>
            ) : (
                <div>Votre voile est vide</div>
            )}
        </div>
    ) : (
        <div>
            {/* bouton pour ouvrir le panier */}
            <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer" onClick={() => setIsOpen(true)}>
                Border la voile
                <span className="group-hover:translate-x-1 duration-300"><BiWind size={25} className="ml-1"/></span>
            </button>
        </div>
    )
}

export default Cart