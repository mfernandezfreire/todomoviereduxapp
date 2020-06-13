import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header jumbotron jumbotron-fluid">
      <h1 className="display-2">To Watch Movies</h1>
      <p className="lead text-center">
        "Una Todo List realizada en <code>React/Redux</code> y estilizada con{" "}
        <code>Bootstrap</code> para guardar tus peliculas pendientes de ver"
      </p>
    </div>
  );
};

export default Header;
