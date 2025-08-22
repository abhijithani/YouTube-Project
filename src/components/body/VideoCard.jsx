import React from 'react'
import { GOOGLE_KEY } from '../utilis/constants';

const VideoCard = ({ info }) => {
  if (!info) return null;
  // console.log(info);

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
    <div className=' w-full aspect-video   '>
      <img
        className='rounded-xl w-full h-full object-cover ' f
        src={thumbnails.high.url}
      />
      <ul>
        <li className='font-bold'>{title}</li>
        <li className='text-gray-600'>{channelTitle}</li>
        <li>{formatViews(statistics.viewCount)} views</li>
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