import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContianer from './CommentsContianer';

const WatchPage = () => {

    const [searchparam] =useSearchParams();
    console.log(searchparam.get("v"));
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    })
    return (
        <div>

        <div className='p-3'>
            <iframe width="1300" height="700" src={"https://www.youtube.com/embed/" + searchparam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicyolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <CommentsContianer/>
        </div>
    )
}

export default WatchPage
