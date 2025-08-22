import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContianer from './CommentsContianer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchparam] = useSearchParams();
    console.log(searchparam.get("v"));
    const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    },[])
    return (
        <div  className={` w-full  mt-[64px]  ${isSidebarOpen ? "ml-[11%]" : "ml-0"}`}>
            <div className='flex w-full'>
                <div className='p-8 '>
                    <iframe className='rounded-md' width="1300" height="700" src={"https://www.youtube.com/embed/" + searchparam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicyolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat/>
                </div>
            </div>
            <CommentsContianer />
        </div>
    )
}

export default WatchPage
