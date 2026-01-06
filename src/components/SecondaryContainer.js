import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies =useSelector(store => store.movie)
  // console.log(movies);
  return (
      movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className=" mt-0 pl-2 md:-mt-52  md:pl-6 relative z-10">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Top-Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Up-Coming Movies"} movies={movies.upComingMovies} />

</div>
     
    </div>
      )
  )
}

export default SecondaryContainer