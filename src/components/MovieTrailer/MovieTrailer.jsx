import React from "react";
import useDataFetch from "../../hooks/useDataFetch";
import YouTube from "react-youtube";
export const MovieTrailer = (props) => {
  const {
    data: results,
    error,
    isLoading,
    refetch,
  } = useDataFetch(
    `https://api.themoviedb.org/3/movie/${props.movieId}/videos`
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
  if (!results) {
    return (
      <div className="text-center font-bold text-yellow-400 text-2xl">
        No data available.
      </div>
    );
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const renderTrailer = () => {
    const trailer = results.results.find(
      (vid) => vid.name === "Official Trailer" || "Trailer"
    );

    //    using the react-youtube package and running the trailer key in videoId
    return <YouTube videoId={trailer.key} opts={opts} />;
  };

  return (
    <div>
      <div className="">
        <div className="  flex justify-center items-center">
          <div> {renderTrailer()}</div>
        </div>
      </div>
    </div>
  );
};
