import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import MovieGenre from "./MovieGenre";
import MovieActors from "./MovieActors";

const API_KEY = "8b930749c5e12df1a8c5e4c73c9f9fa5";

function MovieCard(props) {
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  const movie_id = props.location.state.movie.id;

  let getGenreMovie = async () => {
    const api_call = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    const genreResponse = await api_call.json();
    setGenres(genreResponse.genres);
    setGenreMovie(genreResponse);
  };

  let getActorsMovie = async () => {
    const api_call = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const actorsResponse = await api_call.json();
    setActors(actorsResponse.cast);
  };

  useEffect(() => {
    getGenreMovie();
    getActorsMovie();
  }, []);

  return (
    <div className="movie-card">
      <Nav />
      <div className="movie-navigation">
        <p>Home /</p>
        <p>{props.location.state.movie.title}</p>
      </div>
      <div
        className="movieIntro"
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/w500/${props.location.state.movie.poster_path}")`
        }}
      >
        <div className="movie-intro-content">
          <img
            alt={props.location.state.movie.title}
            src={
              `http://image.tmdb.org/t/p/w500/` +
              props.location.state.movie.poster_path
            }
          />
          <h2>{props.location.state.movie.title}</h2>
          <p>
            <span>Plot</span>
            {props.location.state.movie.overview}
          </p>
        </div>
        <div className="movie-intro-content"></div>
        <span>Genres</span>
        <div>
          <h2 className="titleMovies">Actors</h2>
          {genres.map((x, y) => (
            <MovieGenre date={x} key={y} />
          ))}
        </div>
        <p>
          IMDB RATING
          <span>{props.location.state.movie.vote_average}</span>
        </p>
        <p>Directors</p>
        <p>
          Running Time
          <span>{genreMovie.runtime}</span>
        </p>
        <p>
          Budget
          <span>{genreMovie.budget}</span>
        </p>
        <p>
          Revenue
          <span>{genreMovie.revenue}</span>
        </p>
        <div>
          {actors.map((x, y) => (
            <MovieActors date={x} key={y} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
