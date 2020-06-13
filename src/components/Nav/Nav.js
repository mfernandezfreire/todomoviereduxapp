import React from "react";

import "./Nav.css";
import logo from "../../images/cine.png";

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import "./Nav.css";

const Nav = () => {
  const [toggle, setToggle] = useState("false");

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        To Watch Movies
      </Link>
      <div className="d-flex flex-row">
        <NavLink
          exact
          className="link mx-4"
          activeClassName="activeLink"
          to="/home"
        >
          Añade una pelicula
        </NavLink>
        <NavLink
          exact
          className="link"
          activeClassName="activeLink"
          to="/movielist"
        >
          Revisa tu lista de peliculas
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
