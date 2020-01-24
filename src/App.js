import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PopularMovies from "./pages/popular-movies/PopularMovies";
import SingleMovie from "./pages/single-movie/SingleMovie";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PopularMovies} exact />
        <Route path="/:id" component={SingleMovie} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
