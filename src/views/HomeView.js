import React, { Component } from 'react';
// import { Link, useLocation, useHistory } from 'react-router-dom';
import * as api from '../service/movies-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

export default class HomeView extends Component {
  state = {
    trending: [],
    isLoading: false,
    page: 1,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    api
      .getTrending(this.page)
      .then(({ results }) =>
        this.setState({
          trending: results,
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
        {trending && <MoviesList movies={trending} />}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
