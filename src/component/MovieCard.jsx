
import React from 'react';
import Loder from './Loder';


const MovieCard = ({ movie }) => {
  const { title,poster_path, release_date ,original_name,original_language,profile_path ,known_for_department

} = movie;
  

  return (
      <div className=" bg-black ">
          
      <img
        src={
             
profile_path || poster_path

            ? `https://image.tmdb.org/t/p/w500${profile_path ||poster_path }`
            : `${<Loder/>}`
        }
        alt={title}
        className="w-full h-64 active:scale-95  bg-[rgb(13,37,63)] object-cover "
      />
      <div className="p-2">
        <h3 className="text-lg text-zinc-200 font-bold">{title || original_name
}</h3>
        <p className="text-sm text-zinc-200">{release_date || original_language ||known_for_department
}</p>
      </div>
    </div>
  );
};

export default MovieCard;  