import React from "react";
import useDataFetch from "../../hooks/useDataFetch";

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

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Trending</h1>
        <ul>
          {data.results.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
