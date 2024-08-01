import { fetchPopularMovie, fetchSearchMovie } from "../../services/movie/MovieServicesFuncComp";
import { getMovies, getSearchMovies } from "../reducers/movieSlice";

export const getDataMovie = () => async (dispatch) => {
    fetchPopularMovie((data) => {        
        console.log('data fetching di action : ',data);
        dispatch(getMovies(data))
    })    
}

export const getDataSearchMovie = (query) => async (dispatch) => {
    fetchSearchMovie(query, (data) => {
        console.log('data searching di action : ',data);
        dispatch(getSearchMovies(data))
    })
}