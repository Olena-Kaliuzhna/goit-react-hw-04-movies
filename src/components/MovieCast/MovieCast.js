import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../service/movies-api';
import noCastImg from '../../images/noimages-200x300.png';
import Loader from '../Loader/Loader';
import s from './MovieCast.module.css';

export default class MovieCast extends Component {
  state = { cast: [], isLoading: false };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    api
      .getMoviesCast(movieId)
      .then(({ cast }) => {
        this.setState({
          cast: [...cast],
        });
      })
      .catch(error => toast.error(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { cast, isLoading } = this.state;

    return (
      <div className={s.section}>
        <h2 className={s.title}>cast</h2>

        <ul className={s.container}>
          {cast &&
            cast.map(({ credit_id, profile_path, character, name }) => (
              <li key={credit_id} className={s.item}>
                <div className={s.imageContainer}>
                  <img
                    className={s.image}
                    src={profile_path ? api.imgPath + profile_path : noCastImg}
                    alt={name}
                    width={'210px'}
                  />
                </div>
                <p className={s.name}>{name}</p>
                <p className={s.text}>Character: {character}</p>
              </li>
            ))}
        </ul>
        {isLoading && <Loader />}
      </div>
    );
  }
}
