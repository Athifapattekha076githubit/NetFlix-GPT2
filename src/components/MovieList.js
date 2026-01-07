import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
     if (!movies) return null; 

  return (
    <div className="px-6">
        <h1 className="md:text-3xl text-lg font-bold py-6 text-white">{title}</h1>
         <div className="flex space-x-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden  px-2">
   <div className="flex">
        {movies?.map((movie)=> <MovieCard key={movie.id} posterPath={movie?.poster_path} />
     
 
)}
</div>
   </div>
    </div>
  );
};

export default MovieList;