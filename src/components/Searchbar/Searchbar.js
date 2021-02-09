import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;

    if (search.trim() === '') {
      return toast.error('введите запрос');
    }
    this.props.onSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.searchButton}>
          <span>Search</span>
        </button>
      </form>
    );
  }
}
