import React from "react";

export const FetchData = () => {
  const apiUrl = "https://api.themoviedb.org/3/movie/changes";
  const APITOKEN = process.env.NEXT_PUBLIC_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  fetch("https://api.themoviedb.org/3/movie/changes?page=1", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>FetchData</div>;
};
