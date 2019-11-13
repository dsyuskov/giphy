import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">      
          <div className="header__logo">
            <h1>GIPHY</h1>
          </div>
          <ul className="menu header__menu">
            <li className="menu__item"><Link to="/">Home</Link></li>
            <li className="menu__item"><Link to="tranding-gifs">Tranding Gifs</Link></li>
            <li className="menu__item"><Link to="search">Search</Link></li>
            <li className="menu__item"><Link to="sport">Sport</Link></li>
            <li className="menu__item"><Link to="stikers">Stikers</Link></li>
          </ul>
        </header>
        <main>          
          {this.props.children}
        </main>
      </div>
    )
  }
}
