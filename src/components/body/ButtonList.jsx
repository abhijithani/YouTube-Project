import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const List = ["All", "Gaming", "Music", "Podcast", "Biryani", "Restaurants", "Fishing"]
  return (
    <div className='flex'>
        {List.map((list,index) => (
            <Button key={index} name={list} />
        ))}
      
    </div>
  )
}

export default ButtonList
