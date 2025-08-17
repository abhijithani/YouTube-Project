import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utilis/appSlice';
const Header = () => {
const dispatch = useDispatch();

const togglehandleClick = () => {
  dispatch(toggleMenu());
};
  return (
    <div className='grid grid-flow-col col-span-12 m-1 p-2  shadow-md'>

      <div className='col-span-2 flex items-center '>
        <img
          onClick={togglehandleClick}
          className='h-11 cursor-pointer' src="https://icon-library.com/images/menu-icon-mobile/menu-icon-mobile-20.jpg" alt="menu icon" />
        <img className='h-7' src='https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg' alt='youtube logo' />
      </div>

      <div className='col-span-10 flex justify-center'>
        <input type="text" className='border w-[40%] border-gray-700 rounded-l-full px-2 py-1' placeholder='Search ' />
        <button
          className='border px-2 py-1   border-gray-700 rounded-r-full'
        >
          🔍
        </button>
      </div>

      <div className='flex col-span-2 justify-end'>
        <img className='h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5NNT9-V31hriLzACMhtUW3Xh_b5USGlLkw&s" alt='bellicon' />
        <img className='h-10' src="https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png" alt="profile icon" />
      </div>
    </div>
  )
};

export default Header;
