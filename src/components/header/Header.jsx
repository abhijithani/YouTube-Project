import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utilis/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utilis/constants';
import { cacheResults } from '../utilis/searchSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowsuggestions] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCahe = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCahe[searchQuery]) {
        setSuggestions(searchCahe[searchQuery]);
      } else {
        getSearchSuggestion()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  }


  const togglehandleClick = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (sug) => {
    console.log("hii");
    navigate("/results?search_query=" + sug);
    setShowsuggestions(false);
  }

  return (
    <div className='grid grid-flow-col col-span-9  p-2  fixed top-0 left-0 w-full h-[64px]  bg-white z-50'>

      <div className='col-span-1 flex items-center '>
        <img
          onClick={togglehandleClick}
          className='h-9 cursor-pointer' src="https://www.shareicon.net/data/512x512/2016/04/03/743930_button_512x512.png" alt="menu icon" />

        <a href='/'>
          <div>
            <img className='h-20 ' src= "src\assets\viewPointLogo.jpg" alt='youtube logo' />
          </div>
        </a>

      </div>

      <div className='col-span-7 px-10 '>
        <div className='flex justify-center my-1 relative'>
          <input type="text"
            className='border w-[40%] border-gray-700 rounded-l-full pl-3 py-1'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={()=> setTimeout(() => setShowsuggestions(false),200)}
            placeholder='Search' />

          <button
            className='border px-2 py-1   border-gray-700 rounded-r-full'
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (

          <div className=' absolute top-full left-[38%] w-[26%]  bg-white py-2 px-6  shadow-2xl  border border-gray-200  rounded-md '>
            <ul>
              {suggestions.map((sug) => (
                <li key={sug} className=' py-2 px-2 hover:bg-gray-100 rounded-md'
                  onClick={() => handleSearch(sug)}
                >
                  {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex col-span-1 justify-end'>
        <img className='h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5NNT9-V31hriLzACMhtUW3Xh_b5USGlLkw&s" alt='bellicon' />
        <img className='h-10' src="https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png" alt="profile icon" />
      </div>
    </div>
  )
};

export default Header;
