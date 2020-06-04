import { v4 as uuidv4 } from "uuid";
export const addMovie = (movie, genre) => {
  return {
    type: "ADD_MOVIE",
    id: uuidv4(),
    movie,
    genre,
  };
};

export const editMovie = (id, movie, genre) => {
  return {
    type: "EDIT_TOWATCH",
    id,
    movie,
    genre,
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    id,
  };
};

export const toggleWatch = (id) => {
  return {
    type: "TOGGLE_TOWATCH",
    id,
  };
};

export const toggleEditing = (id) => {
  return {
    type: "TOGGLE_EDITING",
    id,
  };
};

export const addGenre = (id, genre) => {
  return {
    type: "ADD_GENRE",
    id,
    genre,
  };
};

export const addMoviesFiltered = (movies) => {
  return {
    type: "ADD_MOVIES_FILTERED",
    movies,
  };
};

export const watchedFilters = (filter, movies) => {
  return {
    type: "WATCHED_FILTER",
    filter,
    movies,
  };
};

export const filterGenre = (filter, movies, genreFilter) => {
  return {
    type: "FILTER_GENRE",
    filter,
    movies,
    genreFilter,
  };
};
