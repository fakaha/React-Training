import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMovie, getDataSearchMovie } from "../redux/actions/movieAction";
import { useNavigate } from "react-router-dom";


export const CekApiVip = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('')

    const navigate = useNavigate()

  useEffect(() => {
    dispatch(getDataMovie());
  }, [dispatch]);

  const film = useSelector((state) => state.movie.movies);
//   const search = useSelector((state) => state.movie.searchMovies);
  const handleSearch = (query) => {    
      navigate('/searchredux')
    dispatch(getDataSearchMovie(query));
  };

  return (
    <div>
      <h1 className="hover:cursor-pointer" onClick={() => navigate('/')}>MOVIE</h1>

      <h2 className="text-center font-bold text-xl">Ini useSelector redux</h2>
      <div className="flex flex-wrap">
        {film?.map((data) => (
          <p key={data.id}>{data.title}</p>
        ))}
      </div>
      <h2 className="text-center font-bold text-xl">Ini Search redux</h2>
      <div className="flex justify-center my-5 gap-3">
      <input value={query} className="border-black border-2" type="text" placeholder="search" onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={() => handleSearch(query)}>Search</button>
      </div>
    </div>
  );
};
