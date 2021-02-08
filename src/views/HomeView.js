import React, { Component } from 'react';
import * as api from '../service/movies-api';
import { ToastContainer, toast } from 'react-toastify';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

export default class HomeView extends Component {
  state = {
    trending: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    api
      .getTrending()
      .then(movies =>
        this.setState({
          trending: movies,
        }),
      )
      .catch(error => toast.error(`ничего не найдено`))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { trending, isLoading } = this.state;

    return (
      <>
        <h1
          style={{
            padding: '25px 0px 25px 0px',
            textAlign: 'center',
            color: '#f8640e',
          }}
        >
          Trending today
        </h1>
        {isLoading && <Loader />}
        <MoviesList movies={trending} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
