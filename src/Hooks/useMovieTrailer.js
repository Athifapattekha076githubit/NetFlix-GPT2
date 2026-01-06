import { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utils/movieSlice';

const useMovieTrailer = (movie_Id) =>{
   const dispatch = useDispatch();

   const trailerVideo = useSelector(store=>store.movie.trailerVideo);
    

    const getMovieVideo = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"
            +movie_Id+
            "/videos?language=en-US",
             API_OPTIONS
            )
            const json = await data.json();
         
            const filterData = json.results.filter(video => video.type=== "Trailer")
            const trailer = filterData.length ? filterData[0] : json.result[0];
            // console.log(trailer )
            dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{

        !trailerVideo && getMovieVideo();
    })
}

export default useMovieTrailer;