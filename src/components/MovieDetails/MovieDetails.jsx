import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";
import { MovieCredits } from "../MovieCredits/MovieCredits";
import { MovieTrailer } from "../MovieTrailer/MovieTrailer";
import { MovieRecom } from "../MovieRecom/MovieRecom";
import { Footer } from "../Footer/Footer";
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
      
      <div className="flex justify-center items-center w-screen h-screen">
        <div>
        <h1 className="font-bold text-2xl">
        Error : {error.message} : This movie does not exist anymore in our database. Please try another movie or show
          </h1>
        <button
          className="text-center bg-yellow-400 font-bold rounded-md p-2 text-black text-2xl"
          onClick={refetch}
        >
          Retry
        </button>
        </div>
       
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

  return (
    <div className="bg-gradient-to-b from-white via-blue-100 to-blue-400">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 blur-sm   bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 p-[20px] ">
          <div className="lg:flex gap-5  justify-center ">
            {/* image div */}
            <div className=" lg:flex p-5 ">
              {results.poster_path ? (
                <img
                  className=" object-cover rounded-md h-[500px]"
                  src={
                    "https://image.tmdb.org/t/p/original/" + results.poster_path
                  }
                  alt="Movie Poster"
                />
              ) : (
                <img
                  src={
                    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                  }
                  alt=""
                  className="object-cover h-[450px] width-[300px] block rounded-md"
                />
              )}
            </div>
            {/* INFO DIV*/}

            <div className="lg:flex justify-start lg:w-[50rem]  flex-wrap  text-white ">
              <div>
                <div className="lg:flex text-wrap items-center gap-2">
                  <h1 className="font-bold text-yellow-500 text-2xl lg:text-4xl">
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
                  <h1 className="font-bold lg:text-xl text-lg">Rating :</h1>
                  <h1> {results.vote_average}</h1>
                </div>
              </div>

              <p className=" h-auto">{results.overview}</p>

              <div className="lg:flex items-center flex-wrap ">
                <ul className="">
                  <h1 className="text-2xl text-yellow-400 rounded-md  py-1 font-bold">
                    Status
                  </h1>
                  <li className="text-md font-semibold">{results.status}</li>
                  <h1 className="text-2xl text-yellow-400 rounded-md  py-1 font-bold">
                    Budget
                  </h1>
                  <li className="font-semibold text-md">
                    {" "}
                    ${results.budget.toLocaleString()}
                  </li>
                  <h1 className="text-2xl  text-yellow-400 rounded-md  py-1 font-bold">
                    Revenue
                  </h1>
                  <li className="font-semibold text-md">
                    ${results.revenue.toLocaleString()}
                  </li>
                  <h1 className="text-2xl text-yellow-400 rounded-md py-1 font-bold">
                    Original Language
                  </h1>
                  <li className="font-semibold uppercase text-md">
                    {results.original_language}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MovieCredits movieId={id} />
      </div>
      <hr className="text-slate-900" />
      <div className=" p-5 lg:flex justify-start">
        <h1 className="font-bold text-3xl  bg-yellow-500 rounded-md p-2">
          Trailer
        </h1>
      </div>
      <div className="">
        <div>
          <MovieTrailer movieId={id} />
        </div>
      </div>
     
      <div className="p-5 lg:flex bg-blue-500 justify-start">
        <h1 className="font-bold text-3xl  bg-yellow-500 rounded-md p-2">
          Recommendations
        </h1>
      </div>
      <div>
        <MovieRecom />{" "}
      </div>
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};
