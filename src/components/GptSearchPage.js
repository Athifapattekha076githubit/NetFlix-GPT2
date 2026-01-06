import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { Netflix_bg_Logo } from '../Utils/constants';
import GPTSerachBar from './GPTSerachBar';

const GptSearchPage = () => {
  return (
     <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={Netflix_bg_Logo} alt="logo" />
      </div>
      <div className="">
        <GPTSerachBar />
        <GPTMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearchPage
