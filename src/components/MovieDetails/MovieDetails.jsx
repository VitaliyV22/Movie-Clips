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

  console.log(results);
  return (
    <div>
      <div>menu</div>

      <div className="flex ">
        <img
          src={"https://image.tmdb.org/t/p/original/" + results.poster_path}
          alt=""
          className="h-[350px] object-cover sm:h-[500px]"
        />
        <div className="flex flex-col w-[1000px] bg-blue-200">
          <h1>{results.title}</h1>
          <p className="inline-block">({results.release_date})</p>
          <h1>Score {results.vote_average}</h1>
        </div>
      </div>
    </div>
  );
};
