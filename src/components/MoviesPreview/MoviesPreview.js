import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import s from './MoviesPreview.module.css';

function MoviesPreview({ title, imgUrl }) {
  return (
    <>
      <div className={s.containerImage}>
        <img className={s.image} src={imgUrl} alt={title} />
      </div>
      <div className={s.containerTitle}>
        <p className={s.title}>{title}</p>
      </div>
    </>
  );
}

MoviesPreview.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default withRouter(MoviesPreview);
