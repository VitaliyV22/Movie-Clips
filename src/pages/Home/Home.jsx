import React, { useState } from "react";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";
import { Banner } from "../../components/Banner/Banner";
import { PopularShows } from "../../components/PopularShows/PopularShows";

export const Home = () => {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState(true);
  const [showClicked, setShowClicked] = useState(false);
  const [movieClicked, setMovieClicked] = useState(true);

  const showTVShows = () => {
    // hide movies on click so only shows display
    setMovie(false);
    setShow(true);
    // changing button color on click
    setShowClicked(true);
    setMovieClicked(false)
  };

  const showMovies = () => {
    // hide shows on click so only shows movies
    setMovie(true);
    setShow(false);
    setMovieClicked(true)
    setShowClicked(false);
  };



  return (
    <div>
      <Banner />
      <div className="flex flex-row justify-start items-center p-5">
        <h1 className="font-bold  text-4xl p-5 ">Trending</h1>
        <div className="flex ml-[10px] gap-5 items-center  ">
          <button
            onClick={showMovies}
            className={`font-bold text-lg border p-2 rounded-md ${movieClicked ? "bg-yellow-500" : "bg-white"}`}
          >
            Movies
          </button>
          <button
            onClick={showTVShows}
            className={`font-bold text-lg border  p-2 rounded-md ${showClicked ? "bg-yellow-500" : "bg-white"}`}
          >
            Shows
          </button>
        </div>
      </div>
      <hr />
      {movie && <PopularMovies />}

      {show && <PopularShows />}
    </div>
  );
};
