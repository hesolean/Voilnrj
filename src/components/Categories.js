import React from 'react'

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
    
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
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
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