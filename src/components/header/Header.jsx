import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utilis/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utilis/constants';
import { cacheResults } from '../utilis/searchSlice';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowsuggestions] = useState(false)
  const dispatch = useDispatch();

  const searchCahe = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCahe[searchQuery]) {
        setSuggestions(searchCahe[searchQuery]);
      }else{
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
  return (
    <div className='grid grid-flow-col col-span-12 m-1 p-2  shadow-md'>

      <div className='col-span-2 flex items-center '>
        <img
          onClick={togglehandleClick}
          className='h-11 cursor-pointer' src="https://icon-library.com/images/menu-icon-mobile/menu-icon-mobile-20.jpg" alt="menu icon" />

        <a href='/'>
          <div>
            <img className='h-7' src='https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg' alt='youtube logo' />
          </div>
        </a>

      </div>

      <div className='col-span-10 px-10'>
        <div>
          <input type="text"
            className='border w-[40%] border-gray-700 rounded-l-full px-2 py-1'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
            placeholder='Search' />

          <button
            className='border px-2 py-1   border-gray-700 rounded-r-full'
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (

          <div className='fixed bg-white py-4 px-6 w-[30rem] shadow-2xl  border border-gray-200  rounded-md m-2'>
            <ul>
              {suggestions.map((sug) => (
                <li key={sug} className=' py-2 px-2 hover:bg-gray-100 rounded-md'>{sug}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex col-span-2 justify-end'>
        <img className='h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5NNT9-V31hriLzACMhtUW3Xh_b5USGlLkw&s" alt='bellicon' />
        <img className='h-10' src="https://png.pngtree.com/png-clipart/20240722/original/pngtree-user-profile-icon-image-vector-png-image_15611025.png" alt="profile icon" />
      </div>
    </div>
  )
};

export default Header;
