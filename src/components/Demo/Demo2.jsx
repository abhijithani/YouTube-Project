import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
  const [number, setnumber] = useState(0);
  
  let x = 10;
  
  const ref = useRef(0)
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // console.log(ref);
  //ref = {current : 0}
  //not ref = 0;
  //persist state until re-render - then shows the value
  const timer = useRef(null);
  useEffect(() => {
     timer.current = setInterval(() => {
      console.log("abhijith", Math.random());   
    },2000);

    return () => {
      clearInterval(timer.current)
    }
  },[])

  return (
    <div className='w-80 h-80 border border-black ml-4 '>
      <div className='flex  items-center'>
        <button
          className='p-2 m-2 bg-slate-200 rounded-md'
          onClick={() => {
            x = x + 1;
            console.log(x);
            
          }}
        >Increas x</button>
        <h1 className='p-2 m-2text-xl font-bold'>Let = {x}</h1>
      </div>

      <div className='flex  items-center'>
        <button
          className='p-2 m-2 bg-slate-200 rounded-md'
          onClick={() => {
            setnumber(number + 1);
          }}
        >Increas x</button>
        <h1 className='p-2 m-2text-xl font-bold'>state = {number}</h1>
      </div>

      <div className='flex  items-center'>
        <button
          className='p-2 m-2 bg-slate-200 rounded-md'
          onClick={() => {
            ref.current = ref.current + 1;  
            console.log("ref =",ref.current);
            
          }}
        >Increas x</button>
        <h1 className='p-2 m-2text-xl font-bold'>Ref = {ref.current}</h1>
      </div>

      <button
          className='p-2 m-2 bg-red-500 rounded-md text-white'
          onClick={() => {
            clearInterval(timer.current);
          }}
        >Stop printing</button>
    </div>
  )
}

export default Demo2

