import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className='fixed w-[11%] mt-[64px] shadow-md h-screen overflow-y-scroll'>
      <ul className='p-3 border-b '>
        <li className='p-2 px-3 '><Link to={"/"}>
          Home
        </Link>
        </li>
        {/* <li className='p-2 px-3 '><Link to={"/demo"}>
          Demo
        </Link>
        </li> */}
        <li className='p-2 px-3'>Shorts</li>
        <li className='p-2 px-3'>subscriptions</li>
        <li className='p-2 px-3'>Youtube music</li>
      </ul>

      <ul className='p-2 border-b'>
        <h1 className='p-2 px-3 font-bold'>You {'>'}</h1>
        <li className='p-2 px-3' > History</li>
        <li className='p-2 px-3'>playlists</li>
        <li className='p-2 px-3'>Your videos</li>
        <li className='p-2 px-3' >Watch Later</li>
        <li className='p-2 px-3'>Liked videos</li>
        <li className='p-2 px-3'>Downloads</li>
      </ul>

      <ul className='p-2 border-b'>
        <h1 className='p-2 px-3 font-bold'>Explore</h1>
        <li className='p-2 px-3' > Music</li>
        <li className='p-2 px-3'>Flims</li>
        <li className='p-2 px-3'>Live</li>
        <li className='p-2 px-3' >Gaming</li>
        <li className='p-2 px-3'>News</li>
        <li className='p-2 px-3'>Sport</li>
        <li className='p-2 px-3'>Course</li>
        <li className='p-2 px-3'>Fashion & beauty</li>
        <li className='p-2 px-3'>Podcast</li>
      </ul>

      <ul className='p-2 border-b'>
        <h1 className='p-2 px-3 font-bold'>More form youTube</h1>
        <li className='p-2 px-3' > YouTube Studio</li>
        <li className='p-2 px-3'>YouTube Music</li>
        <li className='p-2 px-3'>YouTube kids</li>
      </ul>

      <ul className='p-2 border-b'>
        
        <li className='p-2 px-3' > Settings</li>
        <li className='p-2 px-3'>Repost history</li>
        <li className='p-2 px-3'>Help</li>
        <li className='p-2 px-3'>Send feedback</li>
      </ul>
    </div>
  )
}

export default SideBar
