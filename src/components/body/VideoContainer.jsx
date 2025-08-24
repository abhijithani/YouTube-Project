import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utilis/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ({ isSideList = false }) => {

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
    <div className={isSideList ? "flex flex-col space-y-4" : "grid grid-cols-3 pt-[114px]"}>
      {/* {videos[0] && (
        <div className=' p-2'>
          <Link  to={"/watch?v=" + videos.id} state={{ videos }}>
          <AdVideoCard info={videos[0]} />
        </Link>
        </div>
      )} */}
      {videos.map((video) => (
        <div key={video.id} className=' p-2'>
        <Link  to={"/watch?v=" + video.id} state={{ video }}>
          <VideoCard info={video} />
        </Link>
          </div>
      ))}
    </div>
  )
};

export const HigerVideoContainer = () => {
  return (
    <div className='flex flex-col pt-12 space-y-2'>
      <VideoContainer isSideList={true}/>
    </div>
  )
};

export default VideoContainer
