import React from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";

export const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: results,
    error,
    isLoading,
    refetch,
  } = useDataFetch(`https://api.themoviedb.org/3/movie/${id}`);
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
  const backDropUrl = "https://image.tmdb.org/t/p/original";
  let bannerImage = backDropUrl + results.backdrop_path;
  console.log(results)
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0 blur-sm   bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 p-[20px]">
          <div className="lg:flex justify-center">
            <section className="lg:flex h-[450px] w-[1320px]">
              <div className="">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + results.poster_path
                  }
                  alt=""
                  className="object-cover h-[450px] width-[300px] block rounded-md"
                />
              </div>

              <div className="lg:flex w-[1020px] h-[450px]  text-white box-border ">
                <section className="lg:flex box-border p-10 gap-4 flex-wrap  content-center ">
                  <div>
                    <div className="lg:flex items-center gap-2">
                      <h1 className="font-bold text-yellow-500 text-[40px] ">
                        {results.title}
                      </h1>
                      <p className="text-[30px]">({results.release_date})</p>
                    </div>

                    <div className="ml-5">
                      <ul className="lg:flex list-disc gap-10">
                        {results.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}

                        <li>{results.runtime} m</li>
                      </ul>
                    </div>
                    <div className="lg:flex items-center mt-5 gap-2">
                      <h1 className="font-bold  text-lg">Rating :</h1>
                      <h1> {results.vote_average}</h1>
                    </div>
                  </div>
                  <div className="lg:flex">
                    <p className="text-wrap">{results.overview}</p>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
