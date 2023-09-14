import React from 'react'
import { categoryList } from '../../datas/categoryList'

const Categories = ({ setActiveCategory, activeCategory }) => {
    
  return (
    <div>
        <label
            className='text-lightblue text-xl'
            >
                Choix de la catégorie de vent recherché
            <select
                id='activeCategory'
                name='activeCategory'
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='bg-black text-lightblue m-3 text-xl'
            >
                <option value=''>---</option>
                {categoryList.map((cat) => (
                    <option key={cat.id} value={cat.category}>
                        {cat.category}
                    </option>
                ))}
            </select>
        </label>
        <button 
            className='text-lightblue text-xl'
            onClick={() => setActiveCategory('')}
        >
            Réinitialiser la catégorie de vent
        </button>
    </div>
  )
}

export default Categories