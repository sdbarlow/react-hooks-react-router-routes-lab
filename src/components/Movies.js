import React from "react";
import { movies } from "../data";

function Movies() {
  const eachMovie = movies.map((movie) => {
    const renderGenre = movie.genres.map((genre) => { return (<li key={genre}>{genre}</li>)})
    return <div key={movie.title}>title={movie.title}, time={movie.time}<ul>{renderGenre}</ul></div>
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {eachMovie}
  </div>)
}

export default Movies;
