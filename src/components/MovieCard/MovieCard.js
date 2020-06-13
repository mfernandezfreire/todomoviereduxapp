import React from "react";

import { toggleWatch, toggleEditing, deleteMovie } from "../../store/actions";
import { connect } from "react-redux";

import "./MovieCard.css";

import papelera from "../../images/delete.png";
import view from "../../images/view.png";
import notview from "../../images/notview.png";

import EditMovie from "../EditMovie/EditMovie";

const MovieCard = (movies) => {
  return movies.editing ? (
    <EditMovie key={movies.id} {...movies} />
  ) : (
    <div key={movies.id} className="card col-3 p-0 m-4">
      <div className="cardHeader card-body p-2 d-flex flex-column justify-content-center">
        <h1 className="h4 bg-muted m-2 p-2 text-center rounded bg-light">
          {movies.movie}
        </h1>
        <div>
          {movies.genre.map((genre, idx) => (
            <span key={idx} class="badge badge-light mx-1">
              {genre}
            </span>
          ))}
        </div>
      </div>
      <div className="card-body">
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => movies.toggleEditing(movies.id)}
        >
          Editar Pelicula
        </button>
      </div>
      <div className="card-footer p-1 bg-light">
        {movies.completed === false ? (
          <img
            className="actionLogo mx-2"
            src={notview}
            alt="no visto"
            onClick={() => movies.toggleWatch(movies.id)}
          />
        ) : (
          <img
            className="actionLogo mx-2"
            src={view}
            alt="no visto"
            onClick={() => movies.toggleWatch(movies.id)}
          />
        )}{" "}
        <img
          src={papelera}
          className="actionLogo mx-2"
          onClick={() => movies.deleteMovie(movies.id)}
          alt="logo de papelera"
        />
      </div>
    </div>
    // <div key={movies.id} className="MovieCard">
    //   <h1
    //     style={{
    //       textDecoration: movies.completed ? "line-through" : "none",
    //     }}
    //   >
    //     {movies.movie}
    //   </h1>
    //   {movies.genre.map((genre, idx) => (
    //     <span key={idx}>{genre}</span>
    //   ))}
    //   <button type="button" onClick={() => movies.toggleEditing(movies.id)}>
    //     Editing Mode
    //   </button>
    //   {movies.completed === false ? (
    //     <img
    //       src={notview}
    //       alt="no visto"
    //       onClick={() => movies.toggleWatch(movies.id)}
    //     />
    //   ) : (
    //     <img
    //       src={view}
    //       alt="no visto"
    //       onClick={() => movies.toggleWatch(movies.id)}
    //     />
    //   )}{" "}
    //   <img
    //     src={papelera}
    //     onClick={() => movies.deleteMovie(movies.id)}
    //     alt="logo de papelera"
    //   />
    // </div>
  );
};

export default connect(null, {
  toggleWatch,
  toggleEditing,
  deleteMovie,
})(MovieCard);
