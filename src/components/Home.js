import React, { Component } from 'react';
import TrendingGifs from './TrendingGifs';
import SearchGifs from './SearchGifs';

export default class Home extends Component {
  render() {
    return (
      <div> 
      <TrendingGifs 
        limit = "5"
      />
      <SearchGifs />
      </div>
    );
  }
}