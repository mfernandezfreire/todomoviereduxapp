import React from "react";
import useInputState from "../../hooks/useInputState";
import "./MovieForm.css";

import { addMovie } from "../../store/actions";
import { connect } from "react-redux";

import Header from "../Header/Header";

const MovieForm = ({ addMovie }) => {
  const [title, updateMovie, resetMovie] = useInputState("");
  const [genre, updtateGenre, resetGenre] = useInputState("");

  return (
    <div className="MovieForm container-fluid mt-2">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie(title, genre);
          resetMovie();
          resetGenre();
        }}
      >
        <div className="form-row d-flex flex-column align-items-center">
          <h1 className="display-4 mb-3">Añade una pelicula</h1>
          <div className="form-group col-6">
            <label for="movieTitle" className="h5">
              Título de la pelicula
            </label>
            <input
              type="text"
              className="form-control"
              id="movieTitle"
              value={title}
              onChange={updateMovie}
              placeholder="Escribe aquí el TÍTULO"
              required
            />
          </div>
          <div className="form-group col-6">
            <label for="movieTitle" className="h5">
              Género de la pelicula
            </label>
            <input
              type="text"
              className="form-control"
              id="movieGenre"
              value={genre}
              onChange={updtateGenre}
              placeholder="Escribe aquí el GENERO"
              required
            />
            <small class="form-text text-muted mt-2">
              Al introducir varios generos deja un espacio entre cada uno
            </small>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-secondary mt-3">
          Añadir Pelicula
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addMovie })(MovieForm);
