import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  addMoviesFiltered,
  watchedFilters,
  filterGenre,
} from "../../store/actions";

import MovieCard from "../MovieCard/MovieCard";

import "./MovieList.css";

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
    <div className="MovieList container-fluid mt-5">
      <form className="form-row  d-flex flex-column align-items-center mt-3">
        <div className="col-6 mt-3">
          <label htmlFor="filtros" className="display-4 mb-3">
            Director's Cut
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              ref={(node) => {
                input = node;
              }}
              onChange={search}
              placeholder="Suspense, Comedia, Drama...."
            />
            <div class="input-group-append">
              {watched.watchFilters.all ? (
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Todas"
                  disabled
                />
              ) : (
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Todas"
                  onClick={() => checked("all")}
                />
              )}
              {watched.watchFilters.watched ? (
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Vista"
                  disabled
                />
              ) : (
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Vista"
                  onClick={() => checked("watched")}
                />
              )}
              {watched.watchFilters.not_watched ? (
                <input
                  type="button"
                  value="No Vista"
                  className="btn btn-secondary"
                  disabled
                />
              ) : (
                <input
                  type="button"
                  value="No Vista"
                  className="btn btn-secondary"
                  onClick={() => checked("not_watched")}
                />
              )}
            </div>
          </div>
          <small class="form-text text-muted mt-2">
            Elige el género y si has visto o no la pelicula.
          </small>
        </div>
      </form>
      <div className="container-fluid d-flex flex-row justify-content-center flex-wrap mt-3">
        {watched.moviesFiltered.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {
  addMoviesFiltered,
  watchedFilters,
  filterGenre,
})(MovieList);
