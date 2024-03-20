import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import getColor from "../../hooks/getColor";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";

export const TopRatedMovies = () => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const { data, error, isLoading, refetch } = useDataFetch(
    "https://api.themoviedb.org/3/movie/top_rated"
  );
  if (isLoading) {
    return (
      <div className="text-center font-bold text-yellow-400 text-2xl">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div>
        Error : {error.message}
        <button
          className="text-center font-bold text-yellow-400 text-2xl"
          onClick={refetch}
        >
          Retry
        </button>
      </div>
    );
  }
  if (!data || !data.results) {
    return (
      <div className="text-center font-bold text-yellow-400 text-2xl">
        No data available.
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  return (
    <div>
      <div>
        <Carousel
          draggable={false}
          responsive={responsive}
          autoPlaySpeed={1000}
          showDots={true}
          keyBoardControl={true}
          customTransition="all .2"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.results.map((movie) => (
            <div
              className="flex flex-col justify-start items-center"
              key={movie.id}
            >
              <div className="mb-6 lg:flex flex-col">
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="object-fill rounded-t-md h-[250px] w-[155px] "
                    src={
                      "https://image.tmdb.org/t/p/original/" + movie.poster_path
                    }
                    alt=""
                  />
                </Link>

                <h1
                  className={`w-7 h-7 text-center border-slate-300 border ${getColor(
                    Math.round(movie.vote_average * 10) / 10
                  )} font-bold top-2 absolute  text-slate-800 rounded-3xl text-lg`}
                >
                  {Math.round(movie.vote_average * 10) / 10}
                </h1>
                <button
                  onClick={() => toggleFavorite(movie)}
                  className="  bg-yellow-500 w-full  rounded-b-md text-sm p-1 font-bold"
                >
                  {isFavorite(movie.id)
                    ? "Remove from Favorite"
                    : "Add To Favorites"}
                </button>
              </div>
              <Link to={`/movies/${movie.id}`}>
                <h1 className="font-bold hover:bg-yellow-500 rounded-md p-2 text-center">
                  {movie.title}
                </h1>
              </Link>

              <p>{movie.release_date}</p>
              <p className="font-bold relative mb-5 text-black">
                Rating : {movie.vote_average}{" "}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
