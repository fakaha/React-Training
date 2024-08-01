import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieServiceInstance from "../services/movie/MovieServices";

export const Detail = () => {
  const { id } = useParams();
  const [DataDetail, setDataDetail] = useState([]);
  const navigate = useNavigate()

  

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const data = await movieServiceInstance.fetchDetailMovie(id);
        setDataDetail(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching : ", error);
      }
    };

    getDetailMovie();
  }, [id]);
  return (
    <div className="flex justify-center items-center h-screen gap-5 relative">
      <button className="bg-red-500 text-white px-3 rounded-xl absolute top-5 left-5" onClick={() => navigate('/')}>Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500/${DataDetail?.poster_path}`}
        className="w-48"
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-xl">{DataDetail?.title}</h1>

        <div className="flex gap-2 w-48 flex-wrap">
          {DataDetail?.genres?.map((value) => (
            <p key={value.id} className="bg-red-600 rounded-xl px-3 text-white">
              {value.name}
            </p>
          ))}
        </div>
        <p className="w-80">{DataDetail.overview}</p>
        <div className="flex gap-5">{DataDetail?.production_companies?.map((value) => (
            <img key={value.id} src={`https://image.tmdb.org/t/p/w500/${value.logo_path}`} className="w-24"/>
        ))}</div>
      </div>
    </div>
  );
};
