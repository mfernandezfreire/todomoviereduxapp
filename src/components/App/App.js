import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Nav from "../Nav/Nav";
import MovieForm from "../MovieForm/MovieForm";
import MovieList from "../MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/home" component={MovieForm} />
        <Route exact path="/movielist" component={MovieList} />
      </Switch>
    </div>
  );
}

export default App;
