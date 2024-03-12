import React from "react";

export const Banner = () => {
  return (
    <>
      <div className="flex gap-3 flex-col bg-gradient-to-r from-blue-500 to-blue-200 h-[22rem] pt-20 justify-center items-start p-5">
        <h1 className="font-bold text-5xl text-white">Welcome.</h1>
        <p className="text-white text-lg">Millions of movies, TV shows and people to discover.</p>
        <p className="text-white text-lg">Explore Now</p>
        <form  action="">
          <input
            className=" outline-none text-lg rounded-l-lg px-5 py-2 overflow-hidden"
            type="text"
            name=""
            id=""
            placeholder="Search for a movie ..."
          />
          <button className="text-lg rounded-r-lg px-5 font-bold py-2 bg-yellow-400 border-l border-gray-300" type="submit">Search</button>
        </form>
      </div>
    </>
  );
};
