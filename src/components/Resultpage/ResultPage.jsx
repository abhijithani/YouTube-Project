import React from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoContainer from '../body/VideoContainer';
import { useSelector } from 'react-redux';

const ResultPage = () => {
  const [searchparam] = useSearchParams();
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={` px-4 ${isSidebarOpen ? "ml-[11%]" : "ml-0"}`}>
      <VideoContainer category={searchparam}/>
    </div>
  )
}
export default ResultPage
