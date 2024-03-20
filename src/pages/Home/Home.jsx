import React, { useState } from "react";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";
import { Banner } from "../../components/Banner/Banner";
import { PopularShows } from "../../components/PopularShows/PopularShows";
import { TopRatedMovies } from "../../components/TopRatedMovies/TopRatedMovies";
import { TopRatedShows } from "../../components/TopRatedShows/TopRatedShows";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const [isMovieSelected, setIsMovieSelected] = useState(true);
  const [isRatedMovieSelected, setIsRatedMovieSelected] = useState(true);

  const showMovies = () => {
    setIsMovieSelected(true);
  };

  const showTVShows = () => {
    setIsMovieSelected(false);
  };

  const showRatedMoviews = () => {
    setIsRatedMovieSelected(true);
  };
  const showRatedShows = () => {
    setIsRatedMovieSelected(false);
  };

  return (
    <div>
      <Banner />
      <div className="flex flex-row justify-start items-center p-2 m-5 ">
        <h1 className="font-bold  text-3xl ml-[20px] p-2 border rounded-lg bg-yellow-500 ">
          Now Playing
        </h1>
        <div className="flex ml-[15px] gap-5 items-center  ">
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
      <div className=" p-5  m-auto rounded-lg bg-gradient-to-r from-white to-blue-200">
        {isMovieSelected ? <PopularMovies /> : <PopularShows />}
      </div>

      <div className="flex flex-row justify-start items-center p-5">
        <h1 className="font-bold  text-3xl ml-[20px] p-2 border rounded-lg bg-yellow-500 ">
          Top Rated
        </h1>
        <div className="flex ml-[15px] gap-5 items-center  ">
          <button
            onClick={showRatedMoviews}
            className={`font-bold text-lg border p-2 rounded-md ${
              isRatedMovieSelected ? "bg-yellow-500" : "bg-white"
            }`}
          >
            Movies
          </button>
          <button
            onClick={showRatedShows}
            className={`font-bold text-lg border p-2 rounded-md ${
              !isRatedMovieSelected ? "bg-yellow-500" : "bg-white"
            }`}
          >
            Shows
          </button>
        </div>
      </div>
      <div className=" p-5 m-auto rounded-lg bg-gradient-to-r from-white to-blue-200">
        {isRatedMovieSelected ? <TopRatedMovies /> : <TopRatedShows />}
      </div>
      <div className="relative bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
};
