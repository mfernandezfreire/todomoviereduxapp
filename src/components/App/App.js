import React from "react";
import "./App.css";

import Nav from "../Nav/Nav";
import MovieForm from "../MovieForm/MovieForm";
import MovieList from "../MovieList/MovieList";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieForm />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
