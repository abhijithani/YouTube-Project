import React from 'react'

const VideoCard = ({info}) => {
if (!info) return null;
// console.log(info);

const {snippet, statistics} = info;
const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-80  shadow-md'>
     <img
     className='rounded-sm'f
     src={thumbnails.high.url}
     />
     <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li> 
        <li>{statistics.viewCount}</li>
     </ul>
    </div>
  )
};

export const AdVideoCard = ({info}) => {
  return (
    <div className='p-2 border border-red-600 '>
      <VideoCard info={info}/>
        
    </div>
  )
};


export default VideoCard;