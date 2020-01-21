import React from "react";

function MovieActors(props) {
  return (
    <div className="actorContainer">
      <div className="actor">
        <img
          src={`http://image.tmdb.org/t/p/w500/` + props.date.profile_path}
          alt={props.date.name}
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
