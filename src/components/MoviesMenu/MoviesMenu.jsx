import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MoviesMenu = ({
  category,
  setCategory,
  pageNumber,
  setPageNumber,
}) => {
  const [nav, setNav] = useState(false);
  
  const [isButtonSelected, setIsButtonSelected] = useState(category);

  const categoryChange = (newCategory) => {
    // updates the category state which changes API url in Movies.jsx
    setCategory(newCategory);
    // Reset page number to 1 when category changes
    setPageNumber(1);
    setIsButtonSelected(newCategory);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Movies </h1>
      <div>
        <div className=" gap-5 flex  rounded-md">
          <button
            onClick={() => categoryChange("now_playing")}
            className={`font-bold text-white text-center rounded-md p-2 ${
              isButtonSelected === "now_playing"
                ? "bg-yellow-500"
                : "bg-slate-600"
            }`}
          >
            Now Playing
          </button>
          <button
            onClick={() => categoryChange("upcoming")}
            className={`font-bold text-white text-center rounded-md p-2 ${
              isButtonSelected === "upcoming" ? "bg-yellow-500" : "bg-slate-600"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => categoryChange("top_rated")}
            className={`font-bold text-white text-center rounded-md p-2 ${
              isButtonSelected === "top_rated"
                ? "bg-yellow-500"
                : "bg-slate-600"
            }`}
          >
            Top Rated
          </button>
        </div>
      </div>
     
    </div>
  );
};
