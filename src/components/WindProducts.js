import React from 'react'
import { windList } from '../datas/windList'
import WindItem from './WindItem'

const WindProducts = () => {
  return (
    <div name="windProducts" className='h-screen w-full pt-[100px] bg-gradient-to-b from-darkblue to-lightblue'>
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