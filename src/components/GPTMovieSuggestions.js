import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
// import Shimmer from './Shimmer';
import ShimmerRow from './ShimmerRow';

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults, loading } = useSelector(store => store.gpt);

  // If still loading, show shimmer immediately
  // if (loading) return <Shimmer />;

    if (loading) return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      {/* Show one shimmer row per expected movie category */}
      <ShimmerRow count={6} />
      <ShimmerRow count={6} />
      <ShimmerRow count={6} />
    </div>
  );

  // If no GPT response yet
  if (!movieNames) return null;

  return (
    <div className="text-white p-4 m-4 bg-black bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults?.[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
