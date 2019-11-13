import React, { Component } from 'react';
import TrendingGifs from './TrendingGifs';
import SearchGifs from './SearchGifs';

export default function Home(props) {
  return (
    <div>
      <TrendingGifs 
        limit = "5"
      />
      <SearchGifs 
        limit = "5"
      />   
    </div>   
  );
}
