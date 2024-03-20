import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const APITOKEN = import.meta.env.VITE_API_KEY;

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
              className=" font-bold text-lg rounded-lg px-5 py-2 overflow-hidden"
              type="text"
              onChange={handleInputChange}
              placeholder="Search for a movie ..."
            />
          </form>
        </div>

        <div className=" ml-5  w-auto">
          {data && data.results ? (
            <ul className="lg:flex flex-col absolute z-50 gap-1 rounded-lg border text-black bg-white  ">
              {data.results.slice(0, 9).map((item) => (
                <li
                  className="hover:border border-yellow-400 rounded-lg flex  "
                  key={item.id}
                >
                  <Link to={`/movies/${item.id}`}>
                    <img
                      className="object-fill cursor-pointer rounded-sm h-[50px] w-[40px] "
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        item.poster_path
                      }
                      alt=""
                    />
                  </Link>
                  <div className="flex justify-start m-2 items-center  w-full">
                    <div>
                      <div className="">
                        <Link to={`/movies/${item.id}`}>
                          <h1 className="hover:font-semibold  ">{item.title}</h1>
                        </Link>
                      </div>
                      <div className="">
                        <Link to={`/movies/${item.id}`}>
                          <h1 className="hover:font-semibold ">{item.name}</h1>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};
