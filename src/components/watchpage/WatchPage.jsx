import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContianer from './CommentsContianer';
import ButtonList from '../body/ButtonList';
import { HigerVideoContainer } from '../body/VideoContainer';
import { useLocation } from "react-router-dom";
import Maincontainer from '../body/Maincontainer';

const WatchPage = () => {

    const [searchparam] = useSearchParams();
    console.log(searchparam.get("v"));
    const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
    const dispatch = useDispatch();
    const location = useLocation();
    const video = location.state?.video;
    console.log(video);

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    function formatViews(views) {
        if (views >= 1_000_000) {
            return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
        } else if (views >= 1_000) {
            return (views / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return views.toString();
    }

    return (
        <div className={`w-full  mt-[64px]  ${isSidebarOpen ? "ml-[11%]" : "ml-0"}`}>
            <div className='flex  '>
                <div className='p-8 '>
                    <div>
                        <iframe className='rounded-md' width="1300" height="700" src={"https://www.youtube.com/embed/" + searchparam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicyolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <h1 className='font-bold p-2 m-1 text-xl'>{video.snippet.title}</h1>
                    <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img className='h-10' src="https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png" alt="profile icon" />
                            <h1 className='font-bold p-2 m-1 text-md'>{video.snippet.channelTitle}</h1>
                            <button className='bg-black text-white rounded-2xl px-4 py-1 mx-3'>subscribe</button>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center'>
                                <div className='bg-gray-200 text-black rounded-l-2xl pl-4 py-1 flex items-center'>
                                    <img className='h-6' src="https://www.kindpng.com/picc/m/11-114955_transparent-like-icon-png-youtube-like-button-svg.png" alt="likebtn" />
                                    <p cla>{formatViews(video.statistics.likeCount)}</p>
                                </div>
                                <div className='bg-gray-200 text-white rounded-r-2xl px-4 py-1 items-center '>
                                    <img className='h-6 rotate-180' src="https://www.kindpng.com/picc/m/11-114955_transparent-like-icon-png-youtube-like-button-svg.png" alt="dslikebtn" />
                                </div>

                                <div className='flex items center'>
                                    <button className='bg-gray-200 text-black rounded-2xl px-4 py-1 mx-3'>share</button>
                                    <button className='bg-gray-200 text-black rounded-2xl px-4 py-1 mx-3'>Download</button>
                                    <button className='bg-gray-200 text-black rounded-2xl px-4 py-1 mx-3'>Thanks</button>
                                    <button className='bg-gray-200 text-black rounded-2xl px-1 py-1 mx-3'>
                                        <img className='h-6' src="https://static.thenounproject.com/png/544988-200.png" alt="profile icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <CommentsContianer />
                </div>
                <div className=''>
                    <Maincontainer isSidelist ={true}/>
                    {/* <ButtonList /> */}
                    {/* <HigerVideoContainer /> */}
                </div>
            </div>
        </div>
    )
}

export default WatchPage
