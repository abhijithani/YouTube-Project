import React from 'react'

const VideoCard = ({info}) => {
if (!info) return null;
console.log(info);

const {snippet, statistics} = info;
const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-80  shadow-md'>
     <img
     className='rounded-sm'
     src={thumbnails.high.url}
     />
     <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
     </ul>
    </div>
  )
}

export default VideoCard
