import React from "react";

function MovieIntro(props) {
  if (!props.movie) {
    return null;
  }

  return (
    <div
      className="movieIntro"
      style={{
        backgroundImage: `url("http://image.tmdb.org/t/p/w500/${props.movie.poster_path}")`
      }}
    >
      <div className="movieContainer">
        <div className="movieText">
          <h1 className="movieTitle">{props.movie.title}</h1>
          <p className="movieOverview">{props.movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieIntro;
