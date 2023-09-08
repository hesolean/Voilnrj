import React from 'react'

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
    
  return (
    <div>
        <select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className=''
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  )
}

export default Categories