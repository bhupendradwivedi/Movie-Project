import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-zinc-950 text-white  mx-[14vw] ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-6">🎬 About MovieVerse</h1>
        <p className="text-lg text-zinc-300 leading-relaxed">
          MovieVerse is your go-to platform for discovering popular, trending, and upcoming movies. 
          Powered by the TMDb API, we deliver rich content including trailers, cast information, and more — 
          all in a sleek. Whether you're searching for the latest releases or revisiting classics, 
          MovieVerse helps you stay updated with everything cinema.
        </p>

        <div className="mt-8 border-t border-zinc-700 pt-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2"> Features</h2>
          <ul className="text-zinc-400 list-disc list-inside space-y-1">
            <li>Popular & Trending Movies</li>
            <li>Search by Movie Name</li>
            <li>Watch Trailers Instantly</li>
            <li>Dark Mode UI</li>
            <li>Powered by TMDb API</li>
          </ul>
        </div>

        <div className="mt-10 text-zinc-500 text-sm">
          Made with ❤️ by <span className="text-white font-semibold">Vikash Dwivedi</span> using React, Tailwind, and TMDb.
        </div>
      </div>
    </div>
  );
};

export default About;
