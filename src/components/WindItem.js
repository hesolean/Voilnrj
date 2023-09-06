function WindItem({cover, name, price}) {
    return (
        <li className="bg-sky-500">
            <img src={cover} alt={`${name} cover`}/>
            <label>{name} / {price} €</label>
        </li>
    )
}

export default WindItem