import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div>
        <nav className=" hidden md:flex gap-5 p-5 justify-start items-center font-semibold text-lg fixed w-full border rounded-b-lg top-0 z-50 bg-white h-[4rem]">
          <div>
            <Link className="font-bold text-2xl bg-yellow-500 rounded-md p-2" to={"/"}>
              Movie Clips
            </Link>
          </div>
          <div className="flex gap-5 ">
            <Link to={"/movies"} className="hover:bg-yellow-500 rounded-md ">Movies</Link>
            <Link to={"/shows"} className="hover:bg-yellow-500 rounded-md ">Tv Shows</Link>

            <Link to={"/favorites"} className="hover:bg-yellow-500 rounded-md ">My Favorites</Link>
            <Link to={"/auth"} className="hover:bg-yellow-500 rounded-md ">Login</Link>
          </div>
        </nav>
      </div>
      <div className=" flex md:hidden">
        <button
          onClick={handleClick}
          className="flex items-center justify-center p-2 text-2xl w-full bg-yellow-400 font-bold"
        >
          Menu
        </button>
      </div>
      <div className={(nav ? "block" : "hidden") + " md:hidden"}>
        <div className="flex flex-col text-lg border border-black text-black  gap-3 p-2 font-semibold ">
          <Link to={"/"}>Movie Clips</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/shows"}>Tv Shows</Link>
          <Link to={"/auth"}>Login</Link>
          <Link to={"/favorites"}>My Favorites</Link>
        </div>
      </div>
    </div>
  );
};
