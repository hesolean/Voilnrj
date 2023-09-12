import React from 'react'
import { useFormik } from 'formik'

// 3 constantes qui vont paramétrer la constante formik pour alléger le code du composant
const initialValues = {
    identifiant: '',
    password: ''
}
const onSubmit =  values => {}
const validate = values => {
    let errors = {}
    //si la valeur dans un champs n'existe pas, on renvoie une erreur
    if(!values.identifiant) {
        //on spécifie le format de l'email puisque c'est le format de l'identifiant
        errors.identifiant = 'Identifiant requis'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.identifiant)) {
        errors.identifiant = 'Format invalide'
    }
    if(!values.password) {
        errors.password = 'Password requis'
    }
    return errors
}

// début du composant
const Connexion = () => {

    //constante qui regroupe les valeurs de l'objet qui compose le formulaire ...
    const formik = useFormik({
        initialValues,
        // ... l'objet final du formulaire lors du click sur le bouton submit...
        onSubmit,
        // ... et les critères de validation des champs
        validate
    })

  return (
    <div name="connexion" className='w-full bg-gradient-to-b from-darkblue to-lightblue text-dark md:h-screen'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl front-bold inline border-b-4 border-black'>
                    Connexion
                </p>
            </div>
            <div className='flex justify-center items-center mt-10'>
                {/* formulaire qui embarque la méthode handleSubmit de formik */}
                <form 
                    onSubmit={formik.handleSubmit}
                    className='flex flex-col w-full md:w-1/2'
                >
                    <label 
                        htmlFor='identifiant' 
                        className='text-3xl mb-3'
                    >
                        Identifiant
                    </label>
                    {/* input embarque la méthode handleChange de formik */}
                    <input 
                        type='email' 
                        id='identifiant' 
                        name='identifiant' 
                        placeholder='Entrez votre email' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                        onChange={formik.handleChange}
                        value={formik.values.identifiant}
                    />
                    <label 
                        htmlFor='password' 
                        className='text-3xl mb-3 mt-8'
                    >Mot de passe</label>
                    <input  
                        type='text' 
                        id='password' 
                        name='password' 
                        placeholder='Entrez votre mot de passe' 
                        className='p-2 bg-transparent border-2 rounded-md text-blue focus:outline-none'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {/* le bouton doit être du type submit pour éviter les warnings */}
                    <button
                        type='submit'
                        className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-lightblue bg-gradient-to-r from-blue to-black cursor-pointer hover:scale-110 duration-300"
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Connexion