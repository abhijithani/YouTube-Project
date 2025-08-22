import React, { use, useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const Maincontainer = () => {

  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  const [category, setCategory] = useState()
  return (
    <div className={` px-4 ${isSidebarOpen ? "ml-[11%]" : "ml-0"}`}>
      <ButtonList selectedCategory={category} onCategorySelect={setCategory} />
      <VideoContainer />
    </div>
  )
}

export default Maincontainer
