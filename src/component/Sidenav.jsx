import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {


  return (
    <>
      <div
        className="
           h-screen w-64 bg-[rgb(7,16,21)] border-r-2 border-zinc-500 text-white mt-20 "
        
      >
        <h1 className="text-xl font-bold pl-10 mt-8">New feed</h1>
        <nav className="flex flex-col text-zinc-400 text-xl p-4 mt-4 gap-4 pl-10 h-[95%]">
          <Link
            to="/trending"
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
      
          >
            <i className="mr-2 ri-fire-fill"></i>Trending
          </Link>
          <Link
            to="/Popular"
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
      
          >
            <i className="mr-2 ri-bard-fill"></i>Popular
          </Link>
          <Link
            to="/Movies"
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
          
          >
            <i className="mr-2 ri-movie-2-ai-fill"></i>Movies
          </Link>
          <Link
            to="/Tv"
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
        
          >
            <i className="mr-2 ri-tv-fill"></i>Tv Shows
          </Link>
          <Link
            to="/People"
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
          
          >
            <i className="mr-2 ri-team-fill"></i>People
          </Link>

          <hr className="border-zinc-700" />
          <h1 className="font-bold text-white">Website information</h1>
          <Link
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
        
          >
            <i className="mr-2 ri-information-2-fill"></i>About
          </Link>
          <Link
            className="hover:bg-red-500 p-4 hover:text-white rounded-lg"
      
          >
            <i className="mr-2 ri-cellphone-fill"></i>Contact
          </Link>
        </nav>
      </div>

    
      
        
        
          
        
      
    </>
  );
};

export default Sidenav;
