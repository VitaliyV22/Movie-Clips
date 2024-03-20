import React, { useState } from "react";
import axios from "axios";
const APITOKEN = import.meta.env.VITE_API_KEY;
import { Link } from "react-router-dom";

export const Banner = () => {
  const [searchKey, setSearchkey] = useState("");
  const [data, setData] = useState(null);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/multi",
    params: {
      query: `${searchKey}`,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  const searchMovies = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    setSearchkey(e.target.value);
    if (!e.target.value.trim()) {
      setData(null);
    } else {
      searchMovies();
    }
  };



  return (
    <>
      <div className="flex gap-3 flex-col bg-gradient-to-r from-blue-500 to-blue-200 h-auto pt-20 items-start p-5">
        <div className="ml-5">
          <h1 className="font-bold text-5xl text-white">Welcome.</h1>
          <p className="text-white text-lg">
            Millions of movies, TV shows and people to discover.
          </p>
          <p className="text-white text-lg">Explore Now</p>
        </div>
        <div className="ml-5 ">
          <form className="">
            <input
              className=" outline-none font-bold text-lg lg:rounded-l-lg px-5 py-2 overflow-hidden"
              type="text"
              onChange={handleInputChange}
              placeholder="Search for a movie ..."
            />
            <button
              type={"submit"}
              className="text-lg lg:rounded-r-lg px-5 font-bold py-2 bg-yellow-400 border-l border-gray-300"
              
            >
              Search
            </button>
          </form>
        </div>
        <div className="bg-white ml-5 rounded-md  overflow-auto z-50 w-auto">
          {data && data.results ? (
            <ul className="flex flex-col ">
              {data.results.slice(0, 10).map((item) => (
                <li
                  className="border hover:font-semibold cursor-pointer "
                  key={item.id}
                >
                  <Link to={`/movies/${item.id}`}>
                    <div>{item.title}</div>
                  </Link>
                  <Link to={`/shows/${item.id}`}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};
