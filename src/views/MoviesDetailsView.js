import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../service/movies-api';
import MovieCard from '../components/MovieCard/MovieCard';
import Loader from '../components/Loader/Loader';
import s from '../components/MovieCard/MovieCard.module.css';
import routes from '../routes';

const MoviesCast = lazy(() =>
  import(
    '../components/MovieCast/MovieCast' /* webpackChunkName: "movies-cast" */
  ),
);

const MoviesReviews = lazy(() =>
  import(
    '../components/MoviesReviews/MoviesReviews' /* webpackChunkName: "movies-reviews" */
  ),
);

export default class MoviesDetailsView extends Component {
  state = {
    movie: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    const response = await api
      .getMovieDetales(movieId)
      .catch(error => toast.error(error))
      .finally(() => this.setState({ isLoading: false }));
    this.setState({ movie: response });
  }

  // handleGoBack = () => this.props.history.goBack();
  handleGoBack = () => {
    const { history } = this.props;
    history.push(this.props.location?.state?.from || routes.home);
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {movie && (
          <div className={s.wrapper}>
            <button
              className={s.goBack}
              type="button"
              onClick={this.handleGoBack}
            >
              <span>&#8592;</span>Go back
            </button>

            <MovieCard movie={movie} />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path={`${routes.movieId}/cast`} component={MoviesCast} />
                <Route
                  path={`${routes.movieId}/reviews`}
                  component={MoviesReviews}
                />
              </Switch>
            </Suspense>
          </div>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
