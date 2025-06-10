import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Search from './Search';
import Loder from './Loder';
import Youtube from './Youtube'; 

const Header = () => {
  const [movie, setMovie] = useState(null);
  const [query, setQuery] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  const fetchMovie = async () => {
    try {
      const endpoint = query
        ? `search/movie?query=${query}`
        : `trending/movie/day`;

      const response = await axios.get(endpoint);
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.error('Failed to fetch movie:', error);
    }
  };

  const fetchTrailer = async () => {
    if (!movie) return;
    try {
      const response = await axios.get(`movie/${movie.id}/videos`);
      const trailers = response.data.results;
      const trailer = trailers.find(
        (vid) => vid.site === 'YouTube' && vid.type === 'Trailer'
      );
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
      } else {
    
        alert('Trailer not available')
       ;
      }
    } catch (err) {
      console.error('Failed to load trailer:', err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [query]);

  return (
    <div className="relative w-full h-[100] text-white bg-[rgb(7,16,21)]">
      <Search onSearch={setQuery} />

      {movie ? (
        <div className="relative h-screen">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover overflow-hidden"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8 bg-gradient-to-r from-black/80 to-transparent">
            <h1 className=" text-5xl font-bold mb-4">{movie.title}</h1>
            <p className="max-w-2xl  text-lg  text-gray-200 mb-4 ">
              {movie.overview}
            </p>
            <button
              onClick={fetchTrailer}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-[1vw]"
            >
              Watch Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-200 text-6xl flex flex-col items-center justify-center">
          <Loder />
        </div>
      )}

      
      <Youtube trailerUrl={trailerUrl} onClose={() => setTrailerUrl('')} />
    </div>
  );
};

export default Header;
