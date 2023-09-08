import React from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'

const WindProducts = () => {
  return (
    <div name="windProducts">
        <ul className='flex flex-wrap m-30'>
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

export default WindProducts