import React from "react";

function MovieSearch(props) {
    return (
        <form className="movieForm" onChange={props.handleChange}>
            <input className="movieSearch" type="text" placeholder="search"></input>
        </form>
    )
}

export default MovieSearch;