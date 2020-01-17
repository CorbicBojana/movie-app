import React from "react";

import Nav from "./Nav";

function MovieCard(props) {
    console.log(props)

    return(
        <div className="movie-card">
            <Nav />
            <div className="movie-details">
                <img src={props.location.state.movie.poster_path} alt={props.location.state.movie.title} />
                <h1>{props.location.state.movie.title}</h1>
            </div>
        </div>
    )
}

export default MovieCard;