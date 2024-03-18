import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useDataFetch from "../../hooks/useDataFetch";
export const ShowCredits = (props) => {
  const {
    data: results,
    error,
    isLoading,
    refetch,
  } = useDataFetch(`https://api.themoviedb.org/3/tv/${props.showId}/credits`);
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
  if (!results) {
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
      <div className=" p-10 lg:flex justify-start">
        <h1 className="font-bold text-3xl w-40 bg-yellow-500 rounded-md p-2">
          Top Cast
        </h1>
      </div>
      <div className="p-5 ">
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
          {results.cast.length > 0 ? ( results.cast.slice(0, 15).map((cast) => (
            <div
              className="flex flex-col justify-start items-center"
              key={cast.id}
            >
              <div className="mb-5 lg:flex flex-col">
                {cast.profile_path ? (<img
                  className="object-fill rounded-md h-[180px] w-[120px] "
                  src={
                    "https://image.tmdb.org/t/p/original/" + cast.profile_path
                  }
                  alt=""
                />) : (<img
                  src={
                    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                  }
                  alt=""
                  className="object-fill rounded-md h-[180px] w-[120px]"
                />)}
                
              </div>
              <h1 className="font-bold text-md text-center">{cast.name}</h1>
              <h1 className=" italic text-sm text-center">
                "{cast.character}"
              </h1>
              <p>{cast.release_date}</p>
            </div>
          ))) : (<p className="font-bold text-center">N/A</p>)}
         
        </Carousel>
      </div>
    </div>
  );
};
