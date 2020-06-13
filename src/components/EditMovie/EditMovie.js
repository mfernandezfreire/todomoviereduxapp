import React from "react";
import useInputState from "../../hooks/useInputState";

import "../MovieCard/MovieCard.css";

import scissors from "../../images/scissors.png";

import { connect } from "react-redux";
import { toggleEditing, editMovie } from "../../store/actions";

const EditMovie = (movies) => {
  console.log(movies);
  const [title, updateMovie, resetMovie] = useInputState(movies.movie);
  const [genre, updtateGenre, resetGenre] = useInputState(
    movies.genre.join(" ")
  );
  return (
    <div className="card col-10 col-sm-8 col-md-4 col-lg-4 p-0 m-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          movies.editMovie(movies.id, title, genre);
          resetMovie();
          resetGenre();
          movies.toggleEditing(movies.id);
        }}
      >
        <div className="cardHeader card-body">
          <div className="form-row d-flex flex-column align-items-center">
            <div className="form-group col-10">
              <label htmlFor="movieTitle">Modifica el título</label>
              <input
                type="text"
                id="movieTitle"
                className="form-control"
                value={title}
                onChange={updateMovie}
                placeholder="Write here your desire movie"
              />
            </div>
            <div className="form-group col-10">
              <label htmlFor="movieGenre">Modifica el genero</label>
              <input
                type="text"
                className="form-control"
                id="movieGenre"
                value={genre}
                onChange={updtateGenre}
                placeholder="Write here the GENDER of your desire movie"
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <button type="submit" className="btn btn-outline-secondary mt-3">
            Modifica la pelicula
          </button>
        </div>
      </form>
      <div className="card-footer p-1 bg-light">
        <img
          src={scissors}
          className="actionLogo mx-2"
          alt="Logo de tijeras para editar"
        />
      </div>
    </div>
  );
};

export default connect(null, { toggleEditing, editMovie })(EditMovie);
