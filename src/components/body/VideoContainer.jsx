import React, { useEffect, useState } from 'react'
import { GOOGLE_KEY, YOUTUBE_VIDEO_API } from '../utilis/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = ({ isSideList, category }) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, [category])

  const getvideos = async () => {

    try {
      let url = "";

      if (category === "All") {

        const res = await fetch(YOUTUBE_VIDEO_API);
        const data = await res.json();
        setVideos(data.items || []);

      } else {

        const searchVideoId = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${category}&type=video&maxResults=20&key=` + GOOGLE_KEY);
        const searchdata = await searchVideoId.json();
        const videoId = searchdata.items.map((items) => items.id.videoId)
        console.log(videoId);

        if (videoId.length == 0) {
          setVideos([]);
          return;
        }

        const videosRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId.join(",")}&key=` + GOOGLE_KEY);
        const videosData = await videosRes.json();
        setVideos(videosData.items || []);

      }
    } catch (err) {
      console.error("Error fetching videos:", err);
    }

  }

  return (
    <div className={isSideList ? "flex flex-col space-y-4 pt-12 " : "grid grid-cols-3 pt-[114px]"}>
      {/* {videos[0] && (
        <div className=' p-2'>
          <Link  to={"/watch?v=" + videos.id} state={{ videos }}>
          <AdVideoCard info={videos[0]} />
        </Link>
        </div>
      )} */}
      {videos.map((video, index) => (
        <div key={video.id?.videoId || index} className=' p-2'>
          <Link to={"/watch?v=" + video.id} state={{ video }}>
            <VideoCard info={video} isSideList ={isSideList}/>
          </Link>
        </div>
      ))}
    </div>
  )
};

export const HigerVideoContainer = () => {
  return (
    <div className='flex flex-col pt-12 space-y-2'>
      <VideoContainer isSideList={true} />
    </div>
  )
};

export default VideoContainer
