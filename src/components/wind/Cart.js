import { useState, useEffect } from "react";
import { BiWind } from "react-icons/bi";
import { GiTornado } from "react-icons/gi";
import { WiDayCloudyWindy } from "react-icons/wi";

function Cart({ cart, updateCart }) {
  // constante pour ouvrir ou fermer le panier (la voile), fermé par défaut
  const [isOpen, setIsOpen] = useState(false);

  // calcul du total du panier
  const total = cart.reduce(
    (acc, windType) => acc + windType.amount * windType.price,
    0
  );

  /**
   * retire un produit du panier
   * @param {string} name
   */
  function removeFromCart(windName) {
    const newCart = cart.filter((wind) => wind.windName !== windName);
    updateCart([...newCart]);
  }

  //met à jour le nom de la page en fonction de la valeur du panier
  useEffect(() => {
    document.title = `Voilnrj : ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    // affiche le bouton fermer si le panier est ouvert et vice versa
    <div name="voile">
      <button
        className="group w-fit px-6 py-3 my-2 flex rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        Fermer la voile
        <span className="group-hover:translate-x-1 duration-300">
          <WiDayCloudyWindy size={25} className="ml-3" />
        </span>
      </button>
      {cart.length > 0 ? (
        <div>
          <h2 className="font-semibold text-5xl flex flex-col justify-center items-center my-10">
            Votre voile contient :
          </h2>
          <ul className="text-4xl ml-10 mb-4">
            {/* on passe en revue les éléments du panier pour les afficher */}
            {cart.map(({ windName, windPrice, windAmount, id }) => (
              <div key={`${id}`}>
                {windName} {windPrice}€ * {windAmount} = {windPrice * windAmount}€
                <button
                  className="text-lg w-fit px-6 py-3 my-2 flex rounded-md text-lightblue bg-gradient-to-r from-red to-black cursor-pointer"
                  onClick={() => removeFromCart(windName)}
                >
                  Supprimer le vent
                </button>
              </div>
            ))}
          </ul>

          {/* affiche le total */}
          <h3 className="text-xl border-t-2 pt-2 mb-6 border-darkblue">
            Total : {total}€
          </h3>

          {/* bouton pour vider le panier */}
          <button
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer"
            onClick={() => updateCart([])}
          >
            Vider la voile
            <span className="group-hover:translate-x-1 duration-300">
              <GiTornado size={25} className="ml-3" />
            </span>
          </button>
        </div>
      ) : (
        <div>Votre voile est vide</div>
      )}
    </div>
  ) : (
    <div>
      {/* bouton pour ouvrir le panier */}
      <button
        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Border la voile
        <span className="group-hover:translate-x-1 duration-300">
          <BiWind size={25} className="ml-3" />
        </span>
      </button>
    </div>
  );
}

export default Cart;
