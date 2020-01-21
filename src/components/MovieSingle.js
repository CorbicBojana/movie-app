import React from "react";

import { Link } from "react-router-dom";

function MovieSingle(props) {
  return (
    <div className="movie-single">
      <div className="movie-single-inner">
        <Link
          className="movie-href"
          to={{
            pathname: `/movieCard/${props.date.id}`,
            state: { movie: props.date }
          }}
        >
          <img
            src={`http://image.tmdb.org/t/p/w500/` + props.date.poster_path}
            alt={props.date.title}
          />
        </Link>
      </div>
    </div>
  );
}

export default MovieSingle;
