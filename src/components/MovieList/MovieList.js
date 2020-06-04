import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import useCheckboxState from "../../hooks/useCheckboxState";

import MovieCard from "../MovieCard/MovieCard";

const mapStateToProps = (state) => ({
  movies: state.movies,
  watched: state,
});

const MovieList = ({ movies, watched, moviesFiltered }) => {
  console.log(movies, watched, moviesFiltered);
  let input;

  const [allMovies, setMovies] = useState([...movies]);

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

  // const checked = (e) => {
  //   updateWatched(e.target.value);
  //   if (watched.watched) {
  //     setMovies([...movies].filter((m) => !m.completed === watched));
  //   } else if (watched.not_watched) {
  //     setMovies([...movies].filter((m) => m.completed === watched));
  //   } else {
  //     search();
  //   }
  // };

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
        {/* <label>
          <input type="checkbox" value={"all"} onChange={checked} />
          All
        </label>
        <label>
          <input type="checkbox" value={"watched"} onChange={checked} />
          Watched
        </label>
        <label>
          <input type="checkbox" value={"not_watched"} onChange={checked} />
          Watched
        </label> */}
      </form>
      <div>
        {allMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(MovieList);
