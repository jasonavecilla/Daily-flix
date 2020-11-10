import React from "react";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import FavoriteMoviespage from './pages/FavoriteMoviespage';
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchByActor from "./pages/SearchByActor";
<<<<<<< HEAD

=======
import SearchPage from "./pages/SearchPage";
import { Switch, Route } from "react-router-dom";
>>>>>>> 4cad04af6a60b09f689517a45cc51f79cce15df8

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>  
        <Route path="/favorites" component={FavoriteMoviespage} />
      </Switch>
      <Switch>
        <Route path="/moviedetailspage/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/actor/:personId">
          <SearchByActor />
        </Route>
        <Route path="/searchPage">
          <SearchPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
};

export default App;
