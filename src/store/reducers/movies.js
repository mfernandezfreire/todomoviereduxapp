const addMovie = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: action.id,
          movie: action.movie,
          genre: [...new Set(action.genre.toLowerCase().split(" "))].map(
            (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
          ),
          completed: false,
          editing: false,
        },
      ];

    case "EDIT_TOWATCH":
      return state.map((movie) =>
        movie.id === action.id
          ? {
              ...movie,
              movie: action.movie,
              genre: [...new Set(action.genre.toLowerCase().split(" "))].map(
                (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
              ),
            }
          : movie
      );

    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.id);

    case "TOGGLE_TOWATCH":
      return state.map((movie) =>
        movie.id === action.id
          ? { ...movie, completed: !movie.completed }
          : movie
      );

    case "TOGGLE_EDITING":
      return state.map((movie) =>
        movie.id === action.id ? { ...movie, editing: !movie.editing } : movie
      );

    case "ADD_GENRE":
      return state.map((movie) =>
        movie.id === action.id
          ? { ...movie, genre: movie.genre.push(action.genre) }
          : movie
      );
    default:
      return state;
  }
};

// export const movielist = (state) => state;

export default addMovie;
