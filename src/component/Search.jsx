import React from 'react';

const Search = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim(); 
    if (value) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-2 ">
      <input
        type="text"
        name="search"
        placeholder="Enter movie name..."
        className="w-[50%] text-2xl mx-[16vw] text-zinc-200 p-2 rounded bg-transparent  outline-none"
      />
      <button
        type="submit"
        className="flex justify-center mx-3 text-zinc-300 hover:text-blue-600 active:scale-90"
      >
        <i className="text-3xl ri-search-2-line"></i>
      </button>
    </form>
  );
};

export default Search;
