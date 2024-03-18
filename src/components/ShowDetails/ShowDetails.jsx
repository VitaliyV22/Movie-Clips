import React from "react";
import { useParams } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";
import { ShowCredits } from "../ShowCredits/ShowCredits";
import { ShowTrailer } from "../ShowTrailer/ShowTrailer";
import { ShowRecom } from "../ShowRecom/ShowRecom";

export const ShowDetails = () => {
  const { id } = useParams();
  const {
    data: results,
    error,
    isLoading,
    refetch,
  } = useDataFetch(`https://api.themoviedb.org/3/tv/${id}`);
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

  const backDropUrl = "https://image.tmdb.org/t/p/original";
  let bannerImage = backDropUrl + results.backdrop_path;

  return (
    <div className="bg-gradient-to-b from-white via-blue-100 to-blue-400">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 blur-sm bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 p-4 lg:p-8">
          <div className="lg:flex justify-center">
            <section className="lg:flex w-full lg:w-1320px">
              <div className="w-full lg:w-auto lg:mr-4">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + results.poster_path
                  }
                  alt=""
                  className="object-cover h-64 lg:h-auto w-full rounded-md"
                />
              </div>

              <div className="lg:flex w-full lg:w-auto h-auto text-white box-border">
                <section className="lg:flex flex-col justify-center gap-4 content-center w-full p-4 lg:p-10">
                  <div>
                    <div className="lg:flex items-center gap-2">
                      <h1 className="font-bold text-yellow-500 text-2xl lg:text-4xl">
                        {results.name}
                      </h1>
                      <p className="text-lg lg:text-2xl">
                        ({results.first_air_date})
                      </p>
                    </div>

                    <div className="ml-5">
                      <ul className="lg:flex list-disc gap-10">
                        {results.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))}

                        <li>Seasons : {results.number_of_seasons} </li>
                      </ul>
                    </div>
                    <div className="lg:flex items-center mt-5 gap-2">
                      <h1 className="font-bold text-lg lg:text-xl">Rating :</h1>
                      <h1> {results.vote_average}</h1>
                    </div>
                  </div>
                  <div className="lg:flex w-full">
                    <p className="text-wrap">{results.overview}</p>
                  </div>
                  <div className="lg:flex items-center flex-wrap">
                    <ul>
                      <h1 className="text-xl lg:text-2xl text-yellow-400 rounded-md px-1 py-1 font-bold">
                        Status
                      </h1>
                      <li className="text-md font-semibold">
                        {results.status}
                      </li>
                      <h1 className="text-xl lg:text-2xl text-yellow-400 rounded-md px-1 py-1 font-bold">
                        Network
                      </h1>
                      <li className="text-md font-semibold">
                        {results.networks.map((network) => (
                          <p key={network.id}>{network.name}</p>
                        ))}
                      </li>
                      <h1 className="text-xl lg:text-2xl text-yellow-400 rounded-md px-1 py-1 font-bold">
                        Created By
                      </h1>
                      <li className="text-md font-semibold">
                        {results.created_by.map((creator) => (
                          <p key={creator.id}>{creator.name}</p>
                        ))}
                      </li>
                      <h1 className="text-xl lg:text-2xl text-yellow-400 rounded-md px-1 py-1 font-bold">
                        Original Language
                      </h1>
                      <li className="font-semibold uppercase text-md">
                        {results.original_language}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <ShowCredits showId={id} />
      </div>
      <hr className="text-slate-900" />
      <div className=" p-10 lg:flex justify-start">
        <h1 className="font-bold text-3xl  bg-yellow-500 rounded-md p-2">
        Trailer
        </h1>
      </div>
      <div className="flex justify-evenly p-12">
        <div>
          <ShowTrailer showId={id} />
        </div>
      </div>
      <div></div>
      <div className=" p-10 lg:flex justify-start">
        <h1 className="font-bold text-3xl  bg-yellow-500 rounded-md p-2">
        Recommendations
        </h1>
      </div>
      <div>
        <ShowRecom />{" "}
      </div>
    </div>
  );
};
