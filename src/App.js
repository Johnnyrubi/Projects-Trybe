import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
      <div>Movie Card Library CRUD</div>
    </Router>
  );
}

export default App;
