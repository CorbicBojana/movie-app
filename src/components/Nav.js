import React from "react";

import { Link } from "react-router-dom";

import logo from "../logo.png";
import logo_db from "../logo_db.png";

function Nav() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="./">
          <img className="logo_left" src={logo} alt="movie" />
        </Link>
        <img className="logo_right" src={logo_db} alt="movie_db" />
      </div>
    </div>
  );
}

export default Nav;
