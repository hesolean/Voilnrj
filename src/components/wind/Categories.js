import React from "react";
import { categoryList } from "../../datas/categoryList";

const Categories = ({ setActiveCategory, activeCategory }) => {
  //props : catégorie sélectionnée
  return (
    <div className="flex justify-around items-center w-full h-20">
      <label className="text-lightblue text-xl flex justify-around items-center">
        Choix de la catégorie de vent recherché
        <select
          id="activeCategory"
          name="activeCategory"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="bg-black text-lightblue m-3 text-xl"
        >
          <option value="">---</option>
          {categoryList.map((cat) => (
            <option key={cat.key} value={cat.value}>
              {cat.category}
            </option>
          ))}
        </select>
      </label>
      <button
        className="group w-fit px-6 py-3 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
        onClick={() => setActiveCategory("")}
      >
        Réinitialiser la catégorie de vent
      </button>
    </div>
  );
};

export default Categories;
