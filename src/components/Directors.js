import React from "react";
import { directors } from "../data";

function Directors() {
  const directosList = directors.map((director) => {
    const movieList = director.movies.map((movie) => {return (<li key={movie}>{movie}</li>)})
    return ( <div key={director.name}>{director.name}<ul>{movieList}</ul></div>)
  })
  return(
  <div>
    <h1>Directors Page</h1>
    {directosList}
  </div>)
}

export default Directors;
