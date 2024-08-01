import { combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

export default combineReducers({
    movie: movieSlice,    
})