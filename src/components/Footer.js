import React, { useState } from 'react'

const Footer = () => {
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')

	function handleEmail(e) {
		setEmail(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		alert(`Merci d'avoir partage ${message} avec moi. Je vous répondrai à l'adresse ${email}.`)
		// fetch('https://jsonplaceholder.type.com/posts', {
		// 	methode: 'POST',
		// 	body: JSON.stringify({
		// 		message: message,
		// 		email: email,
		// 	}),
		// 	headers: {
		// 		'Content-type': 'application/json; charset=UTF-8',
		// 	},
		// })
        //     .then((response) => response. json())
        //     .then((json) => console.log(json))
	}
	

    /**
     * action quand l'utilisateur click en dehors de la zone
     */
	function handleBlur() {
		if (!email.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
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
					onChange={handleEmail}
					value={email}
					onBlur={handleBlur}
				/>
				<button
					type='submit'
					className='mt-8'
				>
					Partager
				</button>
			</form>
			
		</footer>
    </div>
  )
}

export default Footer