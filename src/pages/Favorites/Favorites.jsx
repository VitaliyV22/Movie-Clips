import React from "react";
import { Show } from "../../components/Favorite/Show/Show";
import { Movie } from "../../components/Favorite/Movie/Movie";
import { useFavorites } from "../../hooks/useFavorites";
import { Link } from "react-router-dom";
import getColor from "../../hooks/getColor";
import { Footer } from "../../components/Footer/Footer";
export const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useFavorites();

  const dataStorage = JSON.parse(localStorage.favorites);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <>
      <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-3 lg:items-end p-5 lg:gap-8">
        <div className="lg:col-span-3">
          {dataStorage.length === 0 ? (
            <div className="lg:flex justify-center">
              <p className="text-4xl font-bold bg-yellow-500 p-2 ">
                No favorites, please add a movie or show
              </p>
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {dataStorage.map((item) => (
                <li key={item.id}>
                  <Link to={`/movies/${item.id}`}>
                    <h3 className="text-md text-center font-bold rounded-t-xl p-2 lg:text-sm lg:truncate bg-slate-200 group-hover:underline group-hover:underline-offset-4">
                      {item.title}
                      {item.name}
                    </h3>
                    <h1
                      className={`w-7 h-7 text-center border-slate-300  border ${getColor(
                        Math.round(item.vote_average * 10) / 10
                      )} font-bold text-center m-2 absolute bg-yellow-500 text-slate-800 rounded-3xl text-lg`}
                    >
                      {Math.round(item.vote_average * 10) / 10}
                    </h1>
                    <a href="#" className="group block  overflow-hidden">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          item.poster_path
                        }
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[350px]"
                      />
                    </a>
                  </Link>
                  <button
                    onClick={() => toggleFavorite(item)}
                    className=" bg-yellow-500 text-center p-2 w-full rounded-b-md text-sm  font-bold"
                  >
                    {isFavorite(item.id)
                      ? "Remove from Favorite"
                      : "Add To Favorites"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};
