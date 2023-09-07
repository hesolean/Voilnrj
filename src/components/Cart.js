import { useState, useEffect } from "react"
function Cart ({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc, windType) => acc + windType.amount * windType.price,
        0
    )
    useEffect(() => {
        document.title = `Voilnrj : ${total}€ d'achats`
    }, [total])
    return isOpen ? (
        <div>
            <button onClick={() => setIsOpen(false)}>
                Fermer la voile
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Voile</h2>
                    <ul>
                        {cart.map(({name,price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ * {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider la voile</button>
                </div>
            ) : (
                <div>Votre voile est vide</div>
            )}
        </div>
    ) : (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Border la voile
            </button>
        </div>
    )
}

export default Cart