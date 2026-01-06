import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
     loading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
       startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    },
    addGptMovieResults:(state, action)=>{
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults= movieResults;
      
    }
        }
  
})

export const {toggleGptSearchView, addGptMovieResults, startLoading, stopLoading } =gptSlice.actions;
export default gptSlice.reducer