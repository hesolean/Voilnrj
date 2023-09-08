//affichage de chaque produit dans la liste de la home
function WindItem({cover, name, price}) {
    return (
        <li className="bg-sky-500 m-4 flex justify-center items-center">
            <img src={cover} alt={`${name} cover`}/>
            <label className="ml-4 mr-8"> {name} : {price} €</label>
        </li>
    )
}

export default WindItem