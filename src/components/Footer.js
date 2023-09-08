import React, { useState } from 'react'

const Footer = () => {
	const [message, setMessage] = useState('')
  const [inputValue, setInputValue] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		alert(`Merci d'avoir partage ${message} avec moi. Je vous répondrai à l'adresse ${inputValue}.`)
	}
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

	const handleSubmit = (e) => {
		e.preventDefault()
		alert(`Merci d'avoir partagé votre email :  ${message}. Je vous répondrait à l'adresse : ${inputValue}`)
	}
  return (
    <div name='footer'>
        <footer className='text-black p-4 border-t-black border-2 flex justify-start flex-col items-center text-xl bg-lightblue'>
			<form onSubmit={handleSubmit} className='flex flex-col justify-center m-8'>
				<h3 className='mb-2'>Partagez avec moi sur notre passion commune : <u>brasser du vent !</u></h3>
				<textarea
					className='my-8 p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Dites m'en plus sur votre passion."
				></textarea>

				<input
					className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
					placeholder='Entrez votre mail'
					onChange={handleInput}
					value={inputValue}
					onBlur={handleBlur}
				/>
				<button
					type='submit'
					className='mt-8'
				>Partager</button>
			</form>
			
		</footer>
    </div>
  )
}

export default Footer