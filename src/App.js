import React, { useState, useEffect } from "react";

import "./app.css";

import Nav from "./components/Nav";
import MovieIntro from "./components/MovieIntro";
import MovieSearch from "./components/MovieSearch";
import MovieSingle from "./components/MovieSingle";

const API_KEY = "8b930749c5e12df1a8c5e4c73c9f9fa5";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputMovie, setInputMovie] = useState("");
  const [page, setPage] = useState(1);

  let getPopularMovies = async page => {
    const api_call = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const movieResponse = await api_call.json();
    setMovies(movies => movies.concat(movieResponse.results));
  };

  const handleChange = async e => {
    e.persist();
    setInputMovie(e.target.value);
    setPage(1);
    setMovies([]);
    console.log(e.target.value);
    if (!e.target.value) {
      await getPopularMovies();
    } else {
      const api_call = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.value}`
      );
      const movieResponse = await api_call.json();
      setMovies(movieResponse.results);
    }
  };

  useEffect(
    function() {
      if (inputMovie) {
        console.log(1);
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputMovie}&page=${page}`
        )
          .then(res => res.json())
          .then(movieResponse =>
            setMovies(movies => movies.concat(movieResponse.results))
          );
      } else {
        getPopularMovies(page);
      }
    },
    [page]
  );

  return (
    <React.Fragment>
      <Nav />
      <MovieIntro movie={movies[0]} />
      <MovieSearch handleChange={handleChange} inputMovie={inputMovie} />
      <div className="titleContainer">
        <h2 className="titleMovies">Popular Movies</h2>
      </div>
      <div className="movie-all">
        {movies.map((x, y) => (
          <MovieSingle date={x} key={y} />
        ))}
      </div>
      <button className="button" onClick={() => setPage(x => x + 1)}>
        Load more
      </button>
    </React.Fragment>
  );
}

export default App;
