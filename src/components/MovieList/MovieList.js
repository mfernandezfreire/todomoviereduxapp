import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import useCheckboxState from "../../hooks/useCheckboxState";

import MovieCard from "../MovieCard/MovieCard";

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const MovieList = ({ movies }) => {
  let input;

  const [allMovies, setMovies] = useState([...movies]);
  const [watched, updateWatched] = useCheckboxState();

  useEffect(() => {
    search();
  }, [movies]);

  const search = () => {
    setMovies(
      [...movies].filter(
        (m) =>
          m.genre.join("").toLowerCase().indexOf(input.value.toLowerCase()) >= 0
      )
    );
  };

  const checked = () => {
    updateWatched();
    setMovies([...movies].filter((m) => m.completed === watched));
  };

  return (
    <div className="MovieList">
      <h1>To Watch List</h1>
      <h2>All the filter go here!!</h2>
      <form>
        <label>Da filters</label>
        <input
          type="text"
          ref={(node) => (input = node)}
          onChange={search}
          placeholder="Introduce here the genre you wanna see"
        />
        <label>
          <input type="checkbox" value={watched} onChange={checked} />
          Watched
        </label>
      </form>
      <div>
        {allMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} iswatched={watched} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MovieList);
