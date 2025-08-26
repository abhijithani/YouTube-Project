import React from 'react'
import { GOOGLE_KEY } from '../utilis/constants';

const VideoCard = ({ info , isSideList}) => {
  if (!info) return null;
  // console.log(info); 
  // console.log(isSideList);
  
  const { snippet, statistics } = info;
  const { channelTitle, channelId, title, thumbnails } = snippet;


  function formatViews(views) {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return views.toString();
  }

  return (
    <div className={`w-full  ${isSideList ? "flex " : "aspect-video"} `}>
      <img
        className={`rounded-xl object-cover ${isSideList ? "w-44 m-2 aspect-video" : "w-full h-full"} `}
        src={thumbnails.high.url}
      />
      <ul>
        <li className='font-bold'>{title}</li>
        <li className='text-gray-600'>{channelTitle}</li>
        <li>{statistics?.viewCount
          ? `${formatViews(statistics.viewCount)} views`
          : "N/A views"} </li>
      </ul>
    </div>
  )
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className='   '>
      <VideoCard info={info} />
    </div>
  )
};


export default VideoCard;