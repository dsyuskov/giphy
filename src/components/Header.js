import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import '../scss/header.scss';

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header__logo"><Link to="/">GIPHY</Link></h1>
      <ul className="menu header__menu">
        <li className="menu__item menu__item--link"><Link className="menu__link" to="/tranding">Tranding Gifs</Link></li>
        <li className="menu__item menu__item--link"><Link className="menu__link" to="/animals">Animals</Link></li>
        <li className="menu__item menu__item--link"><Link className="menu__link" to="/memes">Memes</Link></li>
        <li className="menu__item menu__item--link"><Link className="menu__link" to="/sport">Sport</Link></li>
        <li className="menu__item menu__item--link"><Link className="menu__link" to="/stikers">Stikers</Link></li>
        <li className="menu__item">
          <Search
            onClick = {props.onClick}
          />
        </li>
      </ul>
    </header>
  )
}
