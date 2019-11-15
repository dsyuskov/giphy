import React from 'react';
import TrendingGifs from './TrendingGifs';
import SearchGifs from './SearchGifs';

export default function Home(props) {
  return (
    <div className = "contentContainer">
      <TrendingGifs        
        limit = "5"
        page = "home"        
      />      
    </div>
  );
}
