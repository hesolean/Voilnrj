import React, { useState } from 'react'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

    /**
     * action quand l'utilisateur clicken dehors de la zone
     */
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

  return (
    <div name='footer'>
        <footer className='text-black p-4 border-t-black border-2 flex justify-start flex-col items-center text-xl bg-lightblue'>
			<div className='mb-2'>
				Quand vous aimez brasser de l'air ...
			</div>
			<div className='mb-2'>Laissez-moi votre mail :</div>
			<input
                className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
    </div>
  )
}

export default Footer