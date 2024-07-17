import React, { useContext } from "react";
import { searchContext } from "../context/SearchContext";
import { Header } from "../components/Header";
import { MovieList } from "../components/MovieList";

export const SearchResult = () => {
  const { handleSearch, searchData, setSearchData, Data } = useContext(searchContext);
  console.log(Data, "<-- result");
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-5">
        {Data?.map((value) => (
            <MovieList dataAll={value}/>            
        ))}
      </div>
    </div>
  );
};
