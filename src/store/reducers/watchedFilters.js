const watchedFilters = (
  state = {
    moviesFiltered: [],
    watchFilters: { all: true, watched: false, not_watched: false },
  },
  action
) => {
  switch (action.type) {
    case "GENRE_FILTER":
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
    default:
      return state;
  }
};

export default watchedFilters;
