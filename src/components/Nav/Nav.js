import React from "react";

import logo from "../../images/cine.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        To Watch Movies
      </a>
    </nav>
  );
};

export default Nav;
