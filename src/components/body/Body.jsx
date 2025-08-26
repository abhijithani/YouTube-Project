import React from 'react'
import SideBar from '../sidebar/SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (

    <div className='grid-flow-col col-span-12 flex '>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body
