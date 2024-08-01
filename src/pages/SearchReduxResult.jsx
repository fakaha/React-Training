import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "../components/MovieList";
import { Header } from "../components/Header";

export const SearchReduxResult = () => {
  const search = useSelector((state) => state.movie.searchMovies);
  console.log(search);
  return (
    <div>
      <Header/>
      <h1 className="text-center py-4 my-3 font-bold text-xl">Search Result Redux</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {search && search.length > 0 ? (
          search?.map((data) => <MovieList dataAll={data} />)
        ) : (
          <p>Data not found</p>
        )}
      </div>
    </div>
  );
};
