import React, { useState, useEffect, createContext } from "react";

export const MoviesContext = createContext(null);

export const MoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  // load cart from localStorage when component mounts
  useEffect(() => {
    const savedFavMovies = localStorage.getItem("favMovies");
    if (savedFavMovies) {
      setFavMovies(JSON.parse(savedFavMovies));
    }
  }, []);

  // save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const addToWhishlist = (movie) => {
    setFavMovies([...favMovies, movie]);
  };

  const removeFromWhishlist = (index) => {
    const newFavMovies = [...favMovies];
    newFavMovies.splice(index, 1);
    setFavMovies(newFavMovies);
  };

  const clearCart = () => {
    setFavMovies([]);
  };

  return (
    <MoviesContext.Provider
      value={{
        favMovies,
        addToWhishlist,
        removeFromWhishlist,
        clearCart,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
