import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../service/movies-api';
import { NavLink } from 'react-router-dom';
import noMovieImg from '../../images/poster-is-not-available.jpg';
import s from './MovieCard.module.css';

function MovieCard({ movie }) {
  return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <img
          className={s.image}
          src={movie.poster_path ? api.imgPath + movie.poster_path : noMovieImg}
          alt={movie.original_name}
        />
      </div>
      <div className={s.iner}>
        <div>
          <h3 className={s.subtitle}>{`User score: ${
            movie.vote_average * 10
          }%`}</h3>
          <h3 className={s.subtitle}>Overview</h3>
          <p className={s.text}>{movie.overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <ul className={(s.text, s.genreList)}>
            {movie.genres &&
              movie.genres.map(({ id, name }) => (
                <li className={s.genre} key={id}>
                  {name}
                </li>
              ))}
          </ul>
          <h3 className={s.subtitle}>Editional information</h3>
        </div>
        <ul className={s.list}>
          <li>
            <NavLink
              to={{ pathname: `/movies/${movie.id}/cast` }}
              className={s.link}
              activeClassName={s.activLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{ pathname: `/movies/${movie.id}/reviews` }}
              className={s.link}
              activeClassName={s.activLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
