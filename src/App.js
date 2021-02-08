import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/AppBar/Nav';
import routes from './routes';
import NotFoundView from './views/NotFoundView';
import Loader from './components/Loader/Loader';
import s from './index.css';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);

const SearchMovieView = lazy(() =>
  import(
    './views/SearchMovieView.js' /* webpackChunkName: "search-movies-view" */
  ),
);

const MoviesDetailsView = lazy(() =>
  import(
    './views/MoviesDetailsView.js' /* webpackChunkName: "movies-details-view" */
  ),
);

const App = () => (
  <div className={s.container}>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={SearchMovieView} />
        <Route path={routes.movieId} component={MoviesDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
