import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import MovieGenre from "./components/MovieGenre";
import MovieActors from "./components/MovieActors";

import config from "../../config";
import instance from "../../axios";

const { API_KEY } = config;

function SingleMovie(props) {
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  const movie_id = props.location.state.movie.id;

  /*let getGenreMovie = async () => {
    const api_call = await fetch(
      `${API_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    const genreResponse = await api_call.json();
    setGenres(genreResponse.genres);
    setGenreMovie(genreResponse);
  };*/

  let getGenreMovie = () => {
    // We're using axios instead of Fetch
    instance
      // The API we're requesting data from
      .get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setGenres(response.data.genres);
        setGenreMovie(response.data);
      });
  };

  /*let getActorsMovie = async () => {
    const api_call = await fetch(
      `${API_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const actorsResponse = await api_call.json();
    setActors(actorsResponse.cast);
  };*/

  let getActorsMovie = () => {
    // We're using axios instead of Fetch
    instance
      // The API we're requesting data from
      .get(`/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setActors(response.data.cast);
      });
  };

  useEffect(() => {
    getGenreMovie();
    getActorsMovie();
  }, []);

  const loadDefaultImage = num => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return " " + hours + "h " + minutes + "m ";
  };

  const rating = props.location.state.movie.vote_average * 10;

  return (
    <div className="movie-card">
      <Nav />
      <div className="movie-navigation">
        <Link to="./">
          <p>Home /</p>
        </Link>
        <p>{props.location.state.movie.title}</p>
      </div>
      <div
        className="movieIntro"
        style={{
          backgroundImage: `url("http://image.tmdb.org/t/p/w500/${props.location.state.movie.poster_path}")`
        }}
      >
        <div className="movie-intro-content">
          <div>
            <div>
              <img
                alt={props.location.state.movie.title}
                src={
                  `http://image.tmdb.org/t/p/w500/` +
                  props.location.state.movie.poster_path
                }
              />
            </div>
          </div>
        </div>
        <div className="movie-intro-text">
          <h2>{props.location.state.movie.title}</h2>
          <p>
            <span>Plot</span>
            {props.location.state.movie.overview}
          </p>
          <span>Genres</span>
          <div className="genres">
            {genres.map((x, y) => (
              <MovieGenre date={x} key={y} />
            ))}
          </div>
          <p>
            IMDB RATING
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={rating}
            ></meter>
            <span>{props.location.state.movie.vote_average}</span>
          </p>
          <span>Directors</span>
          <i
            aria-hidden="true"
            className="fa fa-film fa-5x fa-film icon-movie"
          ></i>
        </div>
        <div className="movie-infobar">
          <div className="movie-infobar-inner">
            <span
              aria-hidden="true"
              className="fa fa-clock-o fa-2x fa-time icon"
            ></span>
            Running Time:
            <span>{loadDefaultImage(genreMovie.runtime)}</span>
          </div>
          <div className="movie-infobar-inner">
            <span
              aria-hidden="true"
              className="fa fa-money fa-2x fa-budget icon"
            ></span>
            Budget:
            <span>
              ${genreMovie.budget ? genreMovie.budget.toLocaleString() : ""}
            </span>
          </div>
          <div className="movie-infobar-inner">
            <span
              aria-hidden="true"
              className="fa fa-ticket fa-2x fa-revenue icon"
            ></span>
            Revenue:
            <span>
              ${genreMovie.revenue ? genreMovie.revenue.toLocaleString() : ""}
            </span>
          </div>
        </div>
        <h2 className="titleActors">Actors</h2>
        <div className="actorsFlex">
          {actors.map((x, y) => (
            <MovieActors date={x} key={y} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
