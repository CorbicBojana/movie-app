import React from "react";

function MovieSearch(props) {
  return (
    <div className="searchbar">
      <div className="searchbarContent">
        <form className="movieForm" onChange={props.handleChange}>
          <span className="search"></span>
          <input
            className="movieSearch"
            type="text"
            placeholder="search"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default MovieSearch;
