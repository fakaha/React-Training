import React, { useEffect, useState } from 'react'
import movieServiceInstance from '../services/movie/MovieServices'
import { MovieList } from '../components/MovieList'
import { Header } from '../components/Header'


export const Home = () => {
    const [DataMovie, setDataMovie] = useState([])
  
    const getDataMovie = async() => {
        try {
            const data = await movieServiceInstance.fetchPopularMovie()
            console.log('data movie : ', data);
            setDataMovie(data)
        } catch (error) {
            console.log('Error fetching : ', error);
        }
    }

    useEffect(() => {
        getDataMovie()
    }, [])
    return (
      <div>
        <Header/>

        <div className='flex flex-wrap justify-center gap-5'>
            {DataMovie?.map((value, index) => (
                <MovieList dataAll={value} key={index}/>
            ))}
        </div>
      </div>
    );
}
