import React from 'react'
import Button from './Button'

const ButtonList = ({onCategorySelect}) => {
    const List = ["All", "Gaming", "Music", "Podcast", "Biryani", "Restaurants", "Fishing"]
  return (
    <div className='flex fixed top-[64px] w-full h-[48px] bg-white z-40   items-center overflow-x-auto '>
        {List.map((list,index) => (
            <Button key={index} name={list} Onclick ={() => onCategorySelect(list)}/>
        ))}
      
    </div>
  )
}

export default ButtonList
