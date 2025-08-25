import React from 'react'
import Button from './Button'

const ButtonList = ({ onCategorySelect }) => {
  const List = ["All", "Gaming", "Music", "Podcast", "Biryani", "Restaurants", "Fishing", "Albums", "Songs", "Malayalam ", "Aircafts", "Trains", "Tourism", "Mixes", "Tamil ", "Mohanlal", "Live", "Art", "Trucks", "Trading", "Culinary Arts", "Recently Uploaded"]
  return (
    <div className='flex fixed top-[64px] w-full h-[48px] bg-white z-40  overflow-x-scroll scrollbar-hide px-2'>
      {List.map((list, index) => (
        <Button key={index} name={list} onClick={() => onCategorySelect(list)} />
      ))}

    </div>
  )
}

export default ButtonList
