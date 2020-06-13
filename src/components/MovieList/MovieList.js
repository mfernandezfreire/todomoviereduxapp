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
    <div className="MovieList container-fluid">
      <div className="row d-flex flex-column align-items-center">
        <div className="col-12 col-sm-12">
          <p className="display-4 text-center m-3">Director's Cut</p>
        </div>
      </div>
      <form className="form-row d-flex flex-column align-items-center mt-3">
        <div className="col-12 col-sm-10 mt-3">
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
      <div className="row d-flex flex-row justify-content-center flex-wrap mt-3 p-3">
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
