import React, { useContext, useEffect, useState } from 'react'
import { searchContext } from '../context/SearchContext'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getUsername } from '../services/auth/AuthServices';

export const Header = () => {
  const cookies = new Cookies();
  const token = cookies.get('Token')
  const [Username, setUsername] = useState('')
  const {handleSearch, searchData, setSearchData} = useContext(searchContext);
    const navigate = useNavigate()
    console.log(searchData, '<-- searchdata header');
    useEffect(() => {
      if(token){
        setUsername(getUsername(token))
      }else{
        window.location.href ='/login';
      }
    }, [])   
  return (
    <div className='flex justify-between px-[5%] items-center py-4 mb-5'>
        <h1 onClick={() => navigate('/')} className='text-xl font-bold hover:cursor-pointer'>Binarian</h1>
        <div className='flex gap-2'>
            <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)} className='border-2 border-black px-2 rounded-md'/>
            <Link to={"/searchresult"}>
            <button onClick={handleSearch}>Search</button>
            </Link>
        </div>
        {Username ? <div className='flex gap-2'><h1>{Username}</h1><button className='bg-red-600 text-white px-3 rounded-xl' onClick={() => {cookies.remove('Token'); window.location.href ='/login'}}>Logout</button></div> : ''}
    </div>
  )
}
