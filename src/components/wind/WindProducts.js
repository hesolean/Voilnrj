import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import axios from "axios";

import WindItem from "./WindItem";
import Categories from "./Categories";
import UpdateWind from "./UpdateWind";

const WindProducts = ({ cart, updateCart }) => {
  // variable pour l'affichage des catégories pour le filtre
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectionChange = (value) => {
    setSelectedCategory(value);
    console.log("selectedCat", selectedCategory);
  };


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
   * @param {string} windName
   * @param {number} windPrice
   */
  function addToCart(windName, windPrice) {
    const currentWindAdded = cart.find((wind) => wind.windName === windName);
    if (currentWindAdded) {
      const cartFilteredCurrentWind = cart.filter(
        (wind) => wind.windName !== windName
      );
      updateCart([
        ...cartFilteredCurrentWind,
        { windName, windPrice, windAmount: currentWindAdded.windAmount + 1 },
      ]);
    } else {
      updateCart([...cart, { windName, windPrice, windAmount: 1 }]);
    }
    alert("Ajouté à la voile !");
  }

  function totalDelete(id) {
    axios
      .delete(`http://localhost:8080/winds/${id}`)
      .then((res) => {
        alert("Vent supprimé définitivement !");
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression :", err.res);
      });
  }

  return (
    <div
      name="windProducts"
      className="w-full flex flex-wrap pt-[100px] bg-gradient-to-b from-darkblue to-lightblue"
    >
      <Categories onSelectionChange={handleSelectionChange} />

      <ul className="flex flex-wrap m-30">
        {winds.map(
          ({
            id,
            windName,
            windPrice,
            windCover,
            windCategory,
            windDescription,
          }) =>
            !selectedCategory || selectedCategory === windCategory ? (
              <div
                key={id}
                className="flex flex-col justify-center items-center"
              >
                <WindItem
                  windCover={windCover}
                  windName={windName}
                  windPrice={windPrice}
                  windDescription={windDescription}
                />

                <button
                  className="group w-fit px-6 py-3 m-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                  onClick={() => addToCart(windName, windPrice)}
                >
                  Ajouter à la voile
                </button>

                <Disclosure className="flex flex-row">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="group w-fit px-6 py-3 m-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-green to-black cursor-pointer hover:scale-110 duration-300"
                        onClick={() => {
                          console.log("id", id)
                        }
                        }
                      >
                        Modifier le vent
                        <ChevronRightIcon
                          className={open ? "rotate-90 transform" : ""}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-black">
                        <UpdateWind id={id} />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <button
                  className="group w-fit px-6 py-3 m-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-red to-black cursor-pointer hover:scale-110 duration-300"
                  onClick={() => totalDelete(id)}
                >
                  Supprimer de la gamme
                </button>
              </div>
            ) : null
        )}
      </ul>
    </div>
  );
};

export default WindProducts;
