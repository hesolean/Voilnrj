import React from 'react'
import bermudes from '@/assets/bermudes.jpg'

export const Page404 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>Bienvenue dans le triangle des Bermudes</h1>
        <img src={bermudes} className='w-64'/>
    </div>
  )
}
export default Page404