
import Header from './Header';
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpComingMovie from '../Hooks/useUpComingMovie';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpComingMovie();

 const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  return (
      <div>
      <Header />      

    {showGptSearch ? (<GptSearchPage />) : ( <>
      <MainContainer />
      <SecondaryContainer />
      </>)
    }
    
     
    </div>
  
  )
}

export default Browse