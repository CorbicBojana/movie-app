import React from "react";

function MovieIntro(props) {
  if (!props.movie) {
    return null;
  }
  console.log(props.movie);

  return (
    <div className="movieIntro">
      <h1>{props.movie.title}</h1>
      <p>{props.movie.overview}</p>
      <img
        src={`http://image.tmdb.org/t/p/w500/` + props.movie.poster_path}
        alt={props.movie.title}
      />
    </div>
  );
}

export default MovieIntro;
