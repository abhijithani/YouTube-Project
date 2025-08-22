import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utilis/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  

  useEffect(() => {
    getvideos();
  }, [])


  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items)
    // console.log(json);

  }

  return (
    <div className='grid grid-cols-3 pt-[114px] '>
      {videos[0] && (
        <div className=' p-2'>
          <AdVideoCard info={videos[0]} />
        </div>
      )}
      {videos.slice(1).map((video) => (
        <div key={video.id} className=' p-2'>
        <Link  to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
          </div>
      ))}
    </div>
  )
}

export default VideoContainer
