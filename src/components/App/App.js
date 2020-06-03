import React from "react";
import "./App.css";

import MovieForm from "../MovieForm/MovieForm";
import MovieList from "../MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default App;
