

import { useEffect } from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const ViBackground = ({movie_Id}) => {
const trailerVideo = useSelector(store => store.movie?.trailerVideo);

useMovieTrailer(movie_Id);
 
  return (
    <div className="w-screen">
 <iframe 
 className="w-screen aspect-video"

  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default ViBackground