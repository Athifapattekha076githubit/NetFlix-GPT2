import React from 'react'
import ViTitle from './ViTitle'
import ViBackground from './ViBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];
  const {original_title, overview,id} = mainMovie
  // console.log(mainMovie);

  return (
    <div className="pt-[13%] bg-black md:pt-0 sm:pt-0">
      <ViTitle title={original_title} overview={overview} />
      <ViBackground movie_Id={id} />
    </div>
  );
};

export default MainContainer;