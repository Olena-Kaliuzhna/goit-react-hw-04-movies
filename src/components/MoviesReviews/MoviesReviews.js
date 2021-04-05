import React, { Component } from 'react';
import * as api from '../../service/movies-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import s from './MoviesReviews.module.css';

export default class MoviesReviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    api
      .getMoviesReviews(movieId)
      .then(reviews => {
        this.setState({
          reviews: [...reviews],
        });
      })
      .catch(error => {
        toast.error(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { reviews, isLoading } = this.state;

    return (
      <div className={s.section}>
        {isLoading && <Loader />}
        <h2 className={s.title}>Reviews</h2>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}

        <ul className={s.container}>
          {reviews.length !== 0 &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={s.subtitle}>Author: {author}</p>
                <p className={s.text}>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
