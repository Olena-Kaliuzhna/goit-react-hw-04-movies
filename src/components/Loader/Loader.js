import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

class LoaderSpin extends Component {
  state = {};
  render() {
    return (
      <div className={s.loader}>
        <Loader type="BallTriangle" color="#f8640e" height={60} />
      </div>
    );
  }
}

export default LoaderSpin;
