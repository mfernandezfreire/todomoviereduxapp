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
    <div key={movies.id} className="MovieCard">
      <h1
        style={{
          textDecoration: movies.completed ? "line-through" : "none",
        }}
      >
        {movies.movie}
      </h1>
      {movies.genre.map((genre, idx) => (
        <span key={idx}>{genre}</span>
      ))}
      <button type="button" onClick={() => movies.toggleEditing(movies.id)}>
        Editing Mode
      </button>
      {movies.completed === false ? (
        <img
          src={notview}
          alt="no visto"
          onClick={() => movies.toggleWatch(movies.id)}
        />
      ) : (
        <img
          src={view}
          alt="no visto"
          onClick={() => movies.toggleWatch(movies.id)}
        />
      )}{" "}
      <img
        src={papelera}
        onClick={() => movies.deleteMovie(movies.id)}
        alt="logo de papelera"
      />
    </div>
  );
};

export default connect(null, {
  toggleWatch,
  toggleEditing,
  deleteMovie,
})(MovieCard);
