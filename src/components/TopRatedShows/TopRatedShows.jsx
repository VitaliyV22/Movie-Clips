import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const TopRatedShows = () => {
  const { data, error, isLoading, refetch } = useDataFetch(
    "https://api.themoviedb.org/3/tv/top_rated"
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
  return (
    <div>
      <div>
        <Carousel
          draggable={false}
          responsive={responsive}
          autoPlaySpeed={1000}
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
              <div className="mb-2">
                <img
                  className="object-fill rounded-md h-[250px] w-[155px] "
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt=""
                />
              </div>
              <h1 className="font-bold">{movie.title}</h1>
              <p>{movie.release_date}</p>
              <p className="font-bold relative text-black">
                Rating : {movie.vote_average}{" "}
              </p>
              <button className="border  bg-yellow-500 rounded-md text-sm p-1 font-bold">
                Add To Favorites
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
