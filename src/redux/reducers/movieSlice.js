import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
        searchMovies: [],
    },
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },
        getSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        }

    }
})

export const { getMovies, getSearchMovies } = movieSlice.actions;
export default movieSlice.reducer;