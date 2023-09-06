import React from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'

function Home() {
    const categories = windList.reduce(
        (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )
    return (
        <div>
            <h1 className='text-3xl text-center font-bold underline'>Bienvenue chez le fournisseur officiel de carburant pour voiliers</h1>
            <ul>
                {windList.map(
                    ({id, name, price, cover}) =>
                    <div key={id}>
                        <WindItem
                            cover={cover}
                            name={name}
                            price={price}
                        />
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Home