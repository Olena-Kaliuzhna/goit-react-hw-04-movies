import React, { Component } from 'react';
import * as api from '../../service/movies-api';
import { toast } from 'react-toastify';
import s from './MoviesReviews.module.css';

export default class MoviesReviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    api
      .getMovieReviews(this.props.match.params.movieId)
      .then(reviews => {
        this.setState({
          reviews: [...reviews],
        });
      })
      .catch(error => {
        toast.error(error);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={s.section}>
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
