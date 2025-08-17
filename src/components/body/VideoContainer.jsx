import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utilis/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
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
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
