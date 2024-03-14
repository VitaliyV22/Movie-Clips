import React, { useState } from "react";


export const ShowsMenu = ({
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
      <h1 className="text-2xl font-bold mb-2">Shows </h1>
      <div>
        <div className=" gap-5 flex  rounded-md">
          <button
            onClick={() => categoryChange("airing_today")}
            className={`font-bold text-white text-center rounded-md p-2 ${
              isButtonSelected === "airing_today"
                ? "bg-yellow-500"
                : "bg-slate-600"
            }`}
          >
            Airing Today
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
