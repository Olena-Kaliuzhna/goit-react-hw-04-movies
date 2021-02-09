import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../../service/movies-api';
import { NavLink, withRouter } from 'react-router-dom';
import noMovieImg from '../../images/poster-is-not-available.jpg';
import s from './MovieCard.module.css';
import routes from '../../routes';

function MovieCard({ movie, location }) {
  const from = location.state?.from;
  const {
    poster_path,
    original_name,
    vote_average,
    overview,
    genres,
    id,
  } = movie;
  return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <img
          className={s.image}
          src={poster_path ? api.imgPath + poster_path : noMovieImg}
          alt={original_name}
        />
      </div>
      <div className={s.iner}>
        <div>
          <h3 className={s.subtitle}>{`User score: ${vote_average * 10}%`}</h3>
          <h3 className={s.subtitle}>Overview</h3>
          <p className={s.text}>{overview}</p>
          <h3 className={s.subtitle}>Genres</h3>
          <ul className={(s.text, s.genreList)}>
            {genres &&
              genres.map(({ id, name }) => (
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
              to={{
                pathname: `${routes.movies}/${id}/cast`,
                state: { from },
              }}
              className={s.link}
              activeClassName={s.activLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${routes.movies}/${id}/reviews`,
                state: { from },
              }}
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

export default withRouter(MovieCard);
