import React from "react";
import useInputState from "../../hooks/useInputState";
import "./EditMovie.css";

import { connect } from "react-redux";
import { toggleEditing, editMovie } from "../../store/actions";

const EditMovie = (movies) => {
  console.log(movies);
  const [title, updateMovie, resetMovie] = useInputState(movies.movie);
  const [genre, updtateGenre, resetGenre] = useInputState(
    movies.genre.join(" ")
  );
  return (
    <div className="addMovie">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          movies.editMovie(movies.id, title, genre);
          resetMovie();
          resetGenre();
          movies.toggleEditing(movies.id);
        }}
      >
        <label htmlFor="movieTitle">Movie Title</label>
        <input
          type="text"
          id="movieTitle"
          value={title}
          onChange={updateMovie}
          placeholder="Write here your desire movie"
        />
        <label htmlFor="movieGenre">Movie Genre</label>
        <input
          type="text"
          id="movieGenre"
          value={genre}
          onChange={updtateGenre}
          placeholder="Write here the GENDER of your desire movie"
        />
        <button type="submit">To Watch Film</button>
      </form>
    </div>
  );
};

export default connect(null, { toggleEditing, editMovie })(EditMovie);
