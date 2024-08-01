import React, { children, createContext, useState } from 'react'
import movieServiceInstance from '../services/movie/MovieServices';


const SearchContext = createContext();

const SearchContextProvider = ({children}) => {    
    const [searchData, setSearchData] = useState('')
    const [Data, setData] = useState([])


    const handleSearch = async() => {
        try {
            const data = await movieServiceInstance.fetchSearchMovie(searchData)
            setData(data)
            console.log(Data, 'datane Data setelah diupdate');
        } catch (error) {
            console.log('Error fetching : ', error);
        }
    }

    return (
        <SearchContext.Provider value={{handleSearch, searchData, setSearchData, Data}}>
            {children}
        </SearchContext.Provider>
    )
}

export const searchContext = SearchContext;
export default SearchContextProvider;