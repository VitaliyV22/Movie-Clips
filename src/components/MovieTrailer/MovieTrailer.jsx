import React, { useEffect, useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";
import YouTube from "react-youtube";
export const MovieTrailer = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.addEventListener("resize", handleWindowSize);
    };
  }, []);

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
    height: isMobile ? "240" : "400", // Adjusted height for mobile
    width: isMobile ? "360" : "640", // Adjusted width for mobile
    playerVars: {
      autoplay: 0,
    },
  };

  const renderTrailer = () => {
    const trailer = results.results.find(
      (vid) => vid.name === "Official Trailer" || "Trailer"
    );
    if (!results.results[0]) {
      return (
        <div className="font-bold text-2xl bg-yellow-500 rounded-md p-5">
          Sorry, this show does not have a trailer
        </div>
      );
    } else {
      return <YouTube videoId={trailer.key} opts={opts} />;
      //    using the react-youtube package and running the trailer key in videoId
    }
  };

  return (
    <div>
      <div className="">
        <div className=""> {renderTrailer()}</div>
      </div>
    </div>
  );
};
