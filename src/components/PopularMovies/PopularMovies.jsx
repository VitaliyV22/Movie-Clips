import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const PopularMovies = () => {
  const { data, error, isLoading, refetch } = useDataFetch(
    "https://api.themoviedb.org/3/movie/popular"
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error : {error.message}
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }
  if (!data || !data.results) {
    return <div>No data available.</div>;
  }
  console.log(data);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Trending</h1>
      <div>
        <Carousel
          responsive={responsive}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.results.map((movie) => (
            <div>
              <h1 key={movie.id}>{movie.title}</h1>
              <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="" />
              <p key={movie.release}>{movie.release_date} </p>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
