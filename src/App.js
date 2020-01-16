import React, { useState, useEffect } from "react";

import "./app.css";

import Nav from "./components/Nav";
import MovieIntro from "./components/MovieIntro";
import MovieSearch from "./components/MovieSearch";
import MovieSingle from "./components/MovieSingle";


const API_KEY = "8b930749c5e12df1a8c5e4c73c9f9fa5";


function App() {
  const [movies, setMovies] = useState([]);
  const [textSearch, setTextSearch] = useState("");

useEffect(
  function() {
    let getMovie = async e => {
      const api_call = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const movieResponse = await api_call.json();
      setMovies(movieResponse.results)
    }
  getMovie()
  }
)

console.log(movies)
 
  return (
    <React.Fragment>
      <Nav />
      <MovieIntro movie={movies[0]}/>
      <MovieSearch />
      <div className="movie-all">
        {movies.map((x,y) => <MovieSingle date={x} key={y} />)}
      </div>
    </React.Fragment>
  )
 }

export default App;