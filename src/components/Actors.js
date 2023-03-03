import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map((actor) => {
    const movieList = actor.movies.map((movie) => {return(<li key={movie}>{movie}</li>)})
    return (<div key={actor.name}>{actor.name}<ul>{movieList}</ul></div>)})
  return (
  <>
    <h1>Actors Page</h1>
    {renderActors}
  </>)
}

export default Actors;
