import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header jumbotron jumbotron-fluid mx-2">
      <h1 className="display-2">To Watch Movies</h1>
      <p className="lead text-center">
        "Una Todo List realizada en <code>React/Redux</code> y estilizada con{" "}
        <code>Bootstrap</code> para guardar tus peliculas pendientes de ver"
      </p>
      <Link
        type="button"
        className="btn btn-outline-secondary mt-4"
        to="/movieList"
      >
        Revisa tus peliculas
      </Link>
    </div>
  );
};

export default Header;
