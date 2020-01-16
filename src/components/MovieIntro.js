import React from "react";

function MovieIntro(props) {
    if(!props.movie) {
        return null
    }
    return(
        <div className="movieIntro">
            <h1>{props.movie.title}</h1>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default MovieIntro;