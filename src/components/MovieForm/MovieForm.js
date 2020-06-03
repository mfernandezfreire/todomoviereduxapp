import React from "react";
import useInputState from "../../hooks/useInputState";
import "./MovieForm.css";

import { addMovie } from "../../store/actions";
import { connect } from "react-redux";

const MovieForm = ({ addMovie }) => {
  const [title, updateMovie, resetMovie] = useInputState("");
  const [genre, updtateGenre, resetGenre] = useInputState("");

  return (
    <div className="addMovie">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMovie(title, genre);
          resetMovie();
          resetGenre();
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

export default connect(null, { addMovie })(MovieForm);
