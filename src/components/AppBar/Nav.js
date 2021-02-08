import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <header>
      <nav className={s.list}>
        <NavLink
          exact
          to={routes.home}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
