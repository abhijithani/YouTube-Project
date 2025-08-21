import React, { useMemo, useState } from 'react'
import { findprime } from "../utilis/helper"


const Demo = () => {
  const [Number, setNumber] = useState();
  const [Theme, setTheme] = useState(false);

  //useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  // const cachedValue = useMemo(calculateValue, dependencies)
  const prime = useMemo(() => findprime(Number), [Number]);

  return (
    <div className={'w-80 h-80 border border-black ' + (Theme && "bg-gray-800 text-white")}>

      <div>
        <button className='p-3 m-1 border border-black'
          onClick={() => setTheme(!Theme)}
        >{Theme ? "light" : "dark"}</button>
      </div>

      <div className='m-1 p-2'>
        <input type="number"
          className='border border-black'
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />    
      </div>

      <div>
        <h1 className='font-bold p-2'>nth prime: {prime}</h1>
      </div>

    </div>
  )
}

export default Demo
