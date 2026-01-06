import React,{useRef} from 'react'
import lang from '../Utils/languageConstanats';
import { useDispatch, useSelector } from 'react-redux';
import openrouter from "../Utils/openrouterai";
import { API_OPTIONS } from '../Utils/constants';
import { addGptMovieResults, stopLoading, startLoading } from '../Utils/gptSlice';


const GPTSerachBar = () => {

   const languageKey = useSelector(store=> store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results || [];
  };

  const handleGPTSearchClick = async ()=>{
    // we need to take this input from User and give output as movie suggestions...
    const query= searchText.current.value;

      if (!query.trim()) {
      alert("Enter any  movie name keyword!");
      return;
    }

    try{
    const gptQuery =  `
        Act as a Movie Recommendation system and suggest 5 movies for:
        ${query}
        Give only 5 movie names, comma-separated. like example results: Happy New Year, Sholay,GolMAal, De Dana Dan,Teesmaar khan`;
    // console.log(searchText.current.value);
     dispatch(startLoading());

     const getResults = await openrouter.chat.send({
        model: "openai/gpt-4o-mini",  // cheaper & safer
        messages: [{ role: "user", content: gptQuery }],
        max_tokens: 200, // prevents 402 errors
        stream: false
      });
      console.log(getResults.choices?.[0]?.message?.content);

      if(!getResults.choices?.[0]?.message?.content) {
        console.error("gpt returned no content")
        return
      }
      let movieList = getResults.choices?.[0]?.message?.content.split(',').map(m=>m.trim()).filter(m=>m.length >0 )
      console.log("Movies from GPT:", movieList);

      const tmdbResults = await Promise.all(
        movieList.map(movie=> searchMovieTMDB(movie))
      )
      console.log(tmdbResults);

     

// const response = await openrouter.chat.send(getResults.choices?.[0]?.message?.content);

// after generating movie list and TMDB fetches:
dispatch(addGptMovieResults({
    movieNames: movieList,
        movieResults: tmdbResults,
}));

 dispatch(stopLoading());
//       dispatch(addGptMovieResults({
//         movieNames: movieList,
//         movieResults: tmdbResults,
//        })
//       );

    } catch (error) {
      console.error("GPT API Error:", error);
      alert("API Error: " + error.message);
    }
  };

 

  return (
   
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className=' w-full  md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type="text" className=' col-span-9 p-4 m-4' placeholder={lang[languageKey].gptSearchPlaceholder} />
        <button onClick={handleGPTSearchClick}
        className=' m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg'>🔍{lang[languageKey].search}</button>
        </form>
    </div>
 
  )
}

export default GPTSerachBar