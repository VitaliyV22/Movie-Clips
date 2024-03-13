import React, { useState } from "react";
import useDataFetch from "../../../hooks/useDataFetch";
import { Link } from "react-router-dom";

export const Upcoming = () => {
  const [pageNumber, setPageNumber] = useState(1);

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
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNumber}`
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
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-2xl font-bold">Trending</h1>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <label
                htmlFor="SortBy"
                className="block text-xs font-medium text-gray-700"
              >
                {" "}
                Sort By{" "}
              </label>

              <select
                id="SortBy"
                className="mt-1 rounded border-gray-300 text-sm"
              >
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>
              <div className="lg:flex flex-col gap-3  w-40">
                <Link
                  to={"/movies/popular"}
                  className="block font-bold text-2xl text-center rounded-md bg-yellow-500 p-2"
                >
                  Popular
                </Link>
                <Link
                  to={"/movies/upcoming"}
                  className="block font-bold text-2xl text-center rounded-md bg-yellow-500 p-2"
                >
                  Upcoming
                </Link>
                <Link
                  to={"/movies/top-rated"}
                  className="block font-bold text-2xl text-center rounded-md bg-yellow-500 p-2"
                >
                  Top Rated
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.results.map((movie) => (
                <li key={movie.id}>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
                      }
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                    />

                    <div className="relative bg-white ">
                      <h3 className="text-xl text-center font-bold rounded-b-xl p-2 bg-yellow-500 group-hover:underline group-hover:underline-offset-4">
                        {movie.title}
                      </h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center ">
              <button
                onClick={pageBackward}
                className="text-4x m-10 rounded-lg  bg-yellow-500 p-2 text-2xl font-bold"
              >
                Back
              </button>
              <button
                onClick={pageForward}
                className="text-4x m-10 rounded-lg  bg-yellow-500 p-2 text-2xl font-bold"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
