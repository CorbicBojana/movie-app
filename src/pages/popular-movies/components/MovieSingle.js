import React from "react";

import { Link } from "react-router-dom";

import defaultImage from "../../../no_image.jpg";

function MovieSingle(props) {
  const loadDefaultImage = e => {
    e.target.setAttribute("src", defaultImage);
  };

  return (
    <div className="movie-single">
      <div className="movie-single-inner">
        <Link
          className="movie-href"
          to={{
            pathname: `/${props.date.id}`,
            state: { movie: props.date }
          }}
        >
          <img
            src={`http://image.tmdb.org/t/p/w500/` + props.date.poster_path}
            alt={props.date.title}
            onError={e => loadDefaultImage(e)}
          />
        </Link>
      </div>
    </div>
  );
}

export default MovieSingle;
