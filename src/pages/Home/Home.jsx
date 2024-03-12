import React, { useState } from "react";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";
import { Banner } from "../../components/Banner/Banner";
import { PopularShows } from "../../components/PopularShows/PopularShows";
import { TopRatedMovies } from "../../components/TopRatedMovies/TopRatedMovies";
import { TopRatedShows } from "../../components/TopRatedShows/TopRatedShows";

export const Home = () => {

  const [isMovieSelected, setIsMovieSelected] = useState(true)

  const showMovies = () => {
    setIsMovieSelected(true)
  }


  const showTVShows = () => {
    setIsMovieSelected(false)
  };

 

  return (
    <div>
      <Banner />
      <div className="flex flex-row justify-start items-center p-5">
        <h1 className="font-bold  text-4xl p-5 ">Trending</h1>
        <div className="flex ml-[10px] gap-5 items-center  ">
          <button
            onClick={showMovies}
            className={`font-bold text-lg border p-2 rounded-md ${
              isMovieSelected ? "bg-yellow-500" : "bg-white"
            }`}
          >
            Movies
          </button>
          <button
            onClick={showTVShows}
            className={`font-bold text-lg border  p-2 rounded-md ${
              !isMovieSelected ? "bg-yellow-500" : "bg-white"
            }`}
          >
            Shows
          </button>
        </div>
      </div>
      <hr />
      {isMovieSelected ? <PopularMovies /> : <PopularShows />}

    </div>
  );
};
