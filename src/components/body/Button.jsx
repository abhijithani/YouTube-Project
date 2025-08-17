import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-1 rounded-md m-2 bg-slate-200 text-black'> {name}</button>
    </div>
  )
}

export default Button;
