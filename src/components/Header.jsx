import React, { useContext } from 'react'
import { searchContext } from '../context/SearchContext'
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const {handleSearch, searchData, setSearchData, Data} = useContext(searchContext)
    const navigate = useNavigate()
    console.log(searchData, '<-- searchdata header');    
  return (
    <div className='flex justify-between px-[5%] items-center py-4 mb-5'>
        <h1 onClick={() => navigate('/')} className='text-xl font-bold hover:cursor-pointer'>Binarian</h1>
        <div className='flex gap-2'>
            <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)} className='border-2 border-black px-2 rounded-md'/>
            <Link to={"/searchresult"}>
            <button onClick={handleSearch}>Search</button>
            </Link>
        </div>
    </div>
  )
}
