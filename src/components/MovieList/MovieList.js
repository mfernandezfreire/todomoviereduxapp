import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  addMoviesFiltered,
  watchedFilters,
  filterGenre,
} from "../../store/actions";

import MovieCard from "../MovieCard/MovieCard";

const mapStateToProps = (state) => ({
  movies: state.movies,
  watched: state.watchedFilters,
});

const MovieList = ({
  movies,
  watched,
  addMoviesFiltered,
  watchedFilters,
  filterGenre,
}) => {
  let input;

  useEffect(() => {
    addMoviesFiltered(movies);
  }, [movies]);

  const search = () => {
    filterGenre(input.value, movies, watched.watchFilters);
  };

  const checked = (watched) => {
    watchedFilters(watched, movies);
  };

  return (
    <div className="MovieList">
      <h1>To Watch List</h1>
      <h2>All the filter go here!!</h2>
      <form>
        <label>Da filters</label>
        <input
          type="text"
          ref={(node) => {
            input = node;
          }}
          onChange={search}
          placeholder="Introduce here the genre you wanna see"
        />
        {watched.watchFilters.all ? (
          <input type="button" value="All" disabled />
        ) : (
          <input type="button" value="All" onClick={() => checked("all")} />
        )}
        {watched.watchFilters.watched ? (
          <input type="button" value="Watched" disabled />
        ) : (
          <input
            type="button"
            value="Watched"
            onClick={() => checked("watched")}
          />
        )}
        {watched.watchFilters.watched ? (
          <input type="button" value="Not Watched" disabled />
        ) : (
          <input
            type="button"
            value="Not Watched"
            onClick={() => checked("not_watched")}
          />
        )}
      </form>
      {watched.moviesFiltered.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, {
  addMoviesFiltered,
  watchedFilters,
  filterGenre,
})(MovieList);
