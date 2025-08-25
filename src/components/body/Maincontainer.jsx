import React, { use, useState } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const Maincontainer = ({isSidelist}) => {

  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  
  const [category, setCategory] = useState("All")

  return (
    <div className={` px-4 ${isSidebarOpen ? "ml-[11%]" : "ml-0"}`}>
      <ButtonList onCategorySelect={setCategory} />
      <VideoContainer isSideList={isSidelist} category={category} />
    </div>
  )
}

export default Maincontainer;
