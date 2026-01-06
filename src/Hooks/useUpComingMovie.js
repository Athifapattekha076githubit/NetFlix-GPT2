import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addUpComingMovies} from "../Utils/movieSlice";

const useUpComingMovie = () => {
  
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store=>store.movie.upComingMovies);


    const getUpComingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpComingMovies(json.results));
    }
    useEffect(()=>{
       !upComingMovies && getUpComingMovies();
    })
}

export default useUpComingMovie