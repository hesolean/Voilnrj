import React from 'react'

function TextError(props) {
  return (
    <div className='text-red text-center'>
        {props.children}
    </div>
  )
}

export default TextError