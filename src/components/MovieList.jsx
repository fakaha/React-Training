import React from "react";
import star from "../assets/img/star.svg";
import { useNavigate } from "react-router-dom";

export const MovieList = (props) => {
    const navigate = useNavigate()
    console.log(props.dataAll, 'data list');
  return (
    <div className="w-[22%] border-2 p-2 border-black rounded-xl flex flex-col gap-2 hover:cursor-pointer hover:scale-[110%] hover:duration-300" onClick={() => navigate(`/detail/${props.dataAll.id}`)}>
      <h2 className="text-center text-md font-semibold">{props.dataAll.title}</h2>
      <div className="flex items-center gap-3 px-3">
        <img src={star} className="w-[30px]"/>
        <p>{props.dataAll.vote_average}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.dataAll.poster_path}`}
        className="rounded-xl"
      />
    </div>
  );
};
