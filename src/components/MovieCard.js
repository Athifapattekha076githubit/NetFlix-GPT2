// 
import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {

  if(!posterPath) return null;
    
  return (
   <div className="w-36 h-50  md:w-48 h-60 m-2 rounded-lg overflow-hidden cursor-pointer group">
      <img 
        src={IMG_CDN_URL+posterPath}
        alt="Movie Poster"
        className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

export default MovieCard;
