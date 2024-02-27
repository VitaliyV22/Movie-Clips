import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div>
        <nav className=" hidden md:flex gap-5 justify-start font-bold text-2xl fixed w-full top-0 z-50 bg-gray-200">
          <Link to={"/"}>Movie Clips</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/shows"}>Tv Shows</Link>
          <Link to={"/people"}>People</Link>
          <Link to={"/favorites"}>My Favorites</Link>
        </nav>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center p-2 rounded-md font-bold"
        >
          Menu
        </button>
      </div>
      <div className={(nav ? "block" : "hidden") + " md:hidden"}>
        <div className="flex flex-col gap-3 p-2 font-semibold ">
          <Link to={"/"}>Movie Clips</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/shows"}>Tv Shows</Link>
          <Link to={"/people"}>People</Link>
          <Link to={"/favorites"}>My Favorites</Link>
        </div>
      </div>
    </div>
  );
};
