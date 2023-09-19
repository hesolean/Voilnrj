//affichage de chaque produit dans la liste de la home
function WindItem({windCover, windName, windPrice}) {
    return (
        <li className="bg-sky-500 m-4 flex justify-center items-center">
            <img src={windCover} alt={`${windName} cover`}/>
            <label className="ml-4 mr-8 text-4xl"> {windName} <br/>{windPrice} €</label>
        </li>
    )
}

export default WindItem