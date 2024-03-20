import React, { useContext, createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

// accessing local storage on inital render
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );


  //save to local storage on change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])
  
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((item) => item.id !== itemId));
    window.location.reload()
  };

  const isFavorite = (itemId) => {
    return favorites.some((item) => item.id === itemId);
 
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
