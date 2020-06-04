const watchedFilters = (
  state = {
    moviesFiltered: [],
    watchFilters: { all: true, watched: false, not_watched: false },
  },
  action
) => {
  switch (action.type) {
    case "ADD_MOVIES_FILTERED":
      return {
        moviesFiltered: [...action.movies],
        watchFilters: { all: true, watched: false, not_watched: false },
      };

    case "WATCHED_FILTER":
      switch (action.filter) {
        case "all":
          return {
            moviesFiltered: [...action.movies],
            watchFilters: { all: true, watched: false, not_watched: false },
          };

        case "watched":
          return {
            moviesFiltered: [...action.movies].filter(
              (movie) => movie.completed
            ),
            watchFilters: { all: false, watched: true, not_watched: false },
          };

        case "not_watched":
          return {
            moviesFiltered: [...action.movies].filter(
              (movie) => !movie.completed
            ),
            watchFilters: { all: false, watched: false, not_watched: true },
          };

        default:
          return state;
      }
    case "FILTER_GENRE":
      return {
        moviesFiltered: [...action.movies].filter(
          (m) =>
            m.genre
              .join("")
              .toLowerCase()
              .indexOf(action.filter.toLowerCase()) >= 0
        ),
        watchFilters: action.genreFilter,
      };
    default:
      return state;
  }
};

export default watchedFilters;
