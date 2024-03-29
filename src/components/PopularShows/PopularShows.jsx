import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import getColor from "../../hooks/getColor";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";

export const PopularShows = () => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { data, error, isLoading, refetch } = useDataFetch(
    "https://api.themoviedb.org/3/tv/popular"
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
      <div className="text-center font-bold  text-2xl">
        Error : {error.message}
        <button
          className="text-center m-5 font-bold border bg-red-500 rounded-md p-2 text-yellow-400 text-2xl"
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
        No data available...
      </div>
    );
  }

  const toggleFavorite = (show) => {
    if (isFavorite(show.id)) {
      removeFromFavorites(show.id);
    } else {
      addToFavorites(show);
    }
  };

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

  // filtering  system(not implemented)
  // const filteredForUS = data.results.filter((origin) => origin.origin_country.includes("US" ||"KR" ||"ES"))

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
          {data.results.map((show) => (
            <div
              className="flex flex-col justify-start items-center"
              key={show.id}
            >
              <div className="mb-6 lg:flex flex-col">
                <Link to={`/shows/${show.id}`}>
                  <img
                    className="object-fill rounded-t-md h-[250px] w-[155px] "
                    src={
                      "https://image.tmdb.org/t/p/original/" + show.poster_path
                    }
                    alt=""
                  />
                </Link>

                <h1
                  className={`w-7 h-7 text-center border-slate-300 border ${getColor(
                    Math.round(show.vote_average * 10) / 10
                  )} font-bold top-2 absolute  text-slate-800 rounded-3xl text-lg`}
                >
                  {Math.round(show.vote_average * 10) / 10}
                </h1>
                <button
                  onClick={() => toggleFavorite(show)}
                  className=" bg-yellow-500  w-full   rounded-b-md text-sm p-1 font-bold"
                >
                  {isFavorite(show.id)
                    ? "Remove from Favorite"
                    : "Add To Favorites"}
                </button>
              </div>
              <Link to={`/shows/${show.id}`}>
                <h1 className="font-bold text-center">{show.name}</h1>
              </Link>

              <p>{show.first_air_date}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
