import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TrendingGifs from './TrendingGifs';

export default class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">          
          <ul>
            <li><Link to="tranding-gifs">Tranding Gifs</Link></li>
            <li><Link to="search">Search</Link></li>
            <li><Link to="sport">Sport</Link></li>
            <li><Link to="stikers">Stikers</Link></li>
          </ul>
        </header>
        <main>          
          {this.props.children}
        </main>
      </div>
    )
  }
}
