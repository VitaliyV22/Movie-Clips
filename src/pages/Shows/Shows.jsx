import React, { useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";
import getColor from "../../hooks/getColor";
import { ShowsMenu } from "../../components/ShowsMenu/ShowsMenu";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { useFavorites } from "../../hooks/useFavorites";

export const Shows = () => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [pageNumber, setPageNumber] = useState(1);

  const [category, setCategory] = useState("airing_today");

  // logic for pagination
  const pageForward = () => {
    setPageNumber(pageNumber + 1);
  };
  const pageBackward = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else {
      return;
    }
  };

  const { data, error, isLoading, refetch } = useDataFetch(
    `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=${pageNumber}`
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

  const toggleFavorite = (show) => {
    if (isFavorite(show.id)) {
      removeFromFavorites(show.id);
    } else {
      addToFavorites(show);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 rounded-xl bg-gradient-to-b from-blue-100 to-blue-400 lg:px-8">
        <ShowsMenu
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          category={category}
          setCategory={setCategory}
        />

        {/* mobile */}
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-3 lg:items-end lg:gap-8">
          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {data.results.map((show) => (
                <li key={show.id}>
                  <Link to={`/shows/${show.id}`}>
                    <h3 className="text-md lg:text-sm lg:truncate text-center font-bold rounded-t-xl  bg-slate-200 p-3 group-hover:underline group-hover:underline-offset-4">
                      {show.name}
                    </h3>
                  </Link>

                  <h1
                    className={`w-7 h-7 text-center border-slate-300 border ${getColor(
                      Math.round(show.vote_average * 10) / 10
                    )} font-bold text-center absolute  text-slate-800 rounded-3xl text-lg`}
                  >
                    {Math.round(show.vote_average * 10) / 10}
                  </h1>
                  <a
                    href="#"
                    className="group block rounded-md overflow-hidden"
                  >
                    <Link to={`/shows/${show.id}`}>
                      {" "}
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          show.poster_path
                        }
                        alt=""
                        className="h-[350px] w-full object-cover  sm:h-[450px]"
                      />
                    </Link>

                    <button
                      onClick={() => toggleFavorite(show)}
                      className=" bg-yellow-500 text-center p-2 w-full rounded-md text-sm  font-bold"
                    >
                      {isFavorite(show.id)
                        ? "Remove from Favorite"
                        : "Add To Favorites"}
                    </button>
                  </a>
                </li>
              ))}
            </ul>
            <hr className="m-10 " />
            <div className="flex justify-center text-lg items-center">
              <button
                onClick={pageBackward}
                className=" m-10 rounded-lg  bg-yellow-500 p-2  font-bold"
              >
                Back
              </button>
              <h1 className=" m-10 rounded-lg px-5 bg-yellow-500 p-2  font-bold">
                {pageNumber}
              </h1>
              <button
                onClick={pageForward}
                className=" m-10 rounded-lg  bg-yellow-500 p-2  font-bold"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 w-screen">
        <Footer />
      </div>
    </section>
  );
};
