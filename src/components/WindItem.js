function WindItem({cover, name, price}) {
    return (
        <li>
            <img src={cover} alt={`${name} cover`}/>
            <label>{name} / {price} €</label>
        </li>
    )
}

export default WindItem