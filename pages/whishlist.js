import React, { useContext } from "react";
import Results from "../Components/Results";
import { MoviesContext } from "../Context/MoviesProvider";

export default function Whishlist() {
  const { favMovies, removeFromWhishlist, clearCart } =
    useContext(MoviesContext);

  return (
    <div className="relative mt-[90px] p-3">
      <Results movies={favMovies} />
    </div>
  );
}
