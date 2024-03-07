import React, { useEffect } from "react";
import { PopularMovies } from "../../components/PopularMovies/PopularMovies";
import { Banner } from "../../components/Banner/Banner";

export const Home = () => {
  return (
    <div>
      <Banner />
      <PopularMovies />
    </div>
  );
};
