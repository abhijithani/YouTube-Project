import React from 'react'

const Button = ({name,onClick}) => {
  return (
    <div>
      <button className='px-3 py-1 rounded-md m-2 bg-slate-200 text-black'
      onClick={onClick}
      > {name}</button>
    </div>
  )
}

export default Button;
