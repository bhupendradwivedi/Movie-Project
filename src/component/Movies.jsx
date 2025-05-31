import React, { useEffect, useState } from 'react';
import axios from "../utils/axios";
import Search from './Search';
import {useNavigate}from "react-router-dom";
import Loder from './Loder';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const navigate= useNavigate();
  

 const fetchMovies = async () => {
  try {
    const endpoint = query
      ? `search/movie?query=${query}`
      : `movie/popular`;

    const response = await axios.get(endpoint);

    setMovies(response.data.results || []);
    console.log(response);
    
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchMovies();
}, [query]);


  return (
    <div className="p-4  ">
      <div className=" flex mx-[vw] justify-around">
      <i onClick={()=>navigate(-1)}
       className=" text-zinc-400 text-3xl ri-arrow-left-line"></i>

      <Search onSearch={setQuery}
       />
       
</div>
      <div className="text-red-500 "></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.length === 0 ? (
         <div className=" w-screen  text-center text-gray-200  text-6xl flex flex-col items-center justify-center"><Loder/></div>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
