import React, { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const [playing, setPlaying] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const apiUrl = "https://api.themoviedb.org/3/movie/now_playing";
  const APITOKEN = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APITOKEN}`,
    },
  };

  useEffect(() => {
    const fetchMoviePopular = async () => {
      try {
        const response = await fetch(`${apiUrl}`, options);
        const playing = response.json();
        setPlaying(playing);
        console.log("DATA: ", playing);
      } catch (error) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviePopular();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error, please try again.</div>;
  }

  return <div>

    <div>
      
    </div>
  </div>;
};
