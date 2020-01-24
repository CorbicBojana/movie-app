import React, { useState, useEffect } from "react";

import Nav from "../../components/Nav";
import MovieIntro from "./components/MovieIntro";
import MovieSearch from "./components/MovieSearch";
import MovieSingle from "./components/MovieSingle";

import config from "../../config";
import instance from "../../axios";

const { API_KEY } = config;

function PopularMovies() {
  //? Declare a new state variable for movie
  const [movie, setMovie] = useState([]);
  //? Declare a new state variable for all movie
  const [movies, setMovies] = useState([]);
  //? Declare a new state variable for input movie
  const [inputMovie, setInputMovie] = useState("");
  //? Declare a new state variable for new load page
  const [page, setPage] = useState(1);

  //? Make the api call to fetch contents for our movies component
  /*let getPopularMovies = async page => {
    const api_call = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const movieResponse = await api_call.json();
    setMovie(movieResponse.results);
    setMovies(movies => movies.concat(movieResponse.results));
  };*/

  let getPopularMovies = page => {
    // We're using axios instead of Fetch
    instance
      // The API we're requesting data from
      .get(`/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then(response => {
        setMovie(response.data.results);
        setMovies(movies => movies.concat(response.data.results));
      });
  };

  /*const handleChange = async e => {
    e.persist();
    setInputMovie(e.target.value);
    setPage(1);
    setMovies([]);
    console.log(e.target.value);
    if (!e.target.value) {
      await getPopularMovies();
    } else {
      const api_call = await fetch(
        ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.value}`
      );
      const movieResponse = await api_call.json();
      setMovies(movieResponse.results);
    }
  };*/

  const handleChange = async e => {
    e.persist();
    setInputMovie(e.target.value);
    setPage(1);
    setMovies([]);
    console.log(e.target.value);
    if (!e.target.value) {
      await getPopularMovies();
    } else {
      await instance
        .get(
          `/movie/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.value}`
        )
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => console.log(error));
    }
  };

  //? Make the api call to fetch contents for input movie
  useEffect(
    function() {
      if (inputMovie) {
        console.log(1);
        instance
          .get(
            `/search/movie?api_key=${API_KEY}&language=en-US&query=${inputMovie}&page=${page}`
          )
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
      <MovieIntro movie={movie[0]} />
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

export default PopularMovies;
