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
        <li className='p-2 px-3 '><Link to={"/demo"}>
          Demo
        </Link>
        </li>
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
        <h1 className='p-2 px-3 font-bold'>You {'>'}</h1>
        <li className='p-2 px-3' > History</li>
        <li className='p-2 px-3'>playlists</li>
        <li className='p-2 px-3'>Your videos</li>
        <li className='p-2 px-3' >Watch Later</li>
        <li className='p-2 px-3'>Liked videos</li>
        <li className='p-2 px-3'>Downloads</li>
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
    </div>
  )
}

export default SideBar
