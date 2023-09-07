import { useState, useEffect } from "react"

function Cart ({cart, updateCart}) {
    // constante pour ouvrir ou fermer le panier (la voile), fermé par défaut
    const [isOpen, setIsOpen] = useState(false)

    // calcul du totla du panier
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
        <div>
            <button onClick={() => setIsOpen(false)}>
                Fermer la voile
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
                    {/* bouton pourvider le panier */}
                    <button onClick={() => updateCart([])}>Vider la voile</button>
                </div>
            ) : (
                <div>Votre voile est vide</div>
            )}
        </div>
    ) : (
        <div>
            {/* bouton pour ouvrir le panier */}
            <button onClick={() => setIsOpen(true)}>
                Border la voile
            </button>
        </div>
    )
}

export default Cart