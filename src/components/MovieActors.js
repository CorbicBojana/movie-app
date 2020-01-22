import React from "react";

import defaultImage from "../no_image.jpg";

function MovieActors(props) {
  const loadDefaultImage = e => {
    e.target.setAttribute("src", defaultImage);
  };

  return (
    <div className="actorContainer">
      <div className="actor">
        <img
          src={`http://image.tmdb.org/t/p/w500/` + props.date.profile_path}
          alt={props.date.name}
          onError={e => loadDefaultImage(e)}
        ></img>
        <div className="actor-right">
          <h2 className="actor-name">{props.date.name}</h2>
          <h2 className="actor-name text">{props.date.character}</h2>
        </div>
      </div>
    </div>
  );
}

export default MovieActors;
