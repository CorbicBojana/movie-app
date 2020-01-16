import React from "react";

function MovieSingle(props) {

    return(
        <div className="movie-single">
            <img src={'http://image.tmdb.org/t/p/w500/' + props.date.poster_path} alt={props.date.title} />
        </div>
    )
}

export default MovieSingle;