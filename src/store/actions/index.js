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

export const genreFilter = (filter, movies) => {
  return {
    type: "GENRE_FILTER",
    filter,
    movies,
  };
};
