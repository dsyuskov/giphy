import React from 'react';
import ContentContainer from './ContentContainer';
import { contentAPI } from '../services/giphy';

export default function Home(props) {
  return (
    <div className = "main-wrapper">
      <ContentContainer 
        title = 'Trending gifs'
        limit = '5'
        content = { contentAPI.TRENDING_GIFS }
        searchString = ''
      />
      <ContentContainer
        title = 'Animals gifs'
        limit = '5'
        content = { contentAPI.SEARCH_GIFS }
        searchString = 'animals'
      />
      <ContentContainer
        title = 'Memes gifs'
        limit = '5'
        content = { contentAPI.SEARCH_GIFS }
        searchString = 'memes'
      />
      <ContentContainer
        title = 'Sport gifs'
        limit = '5'
        content = { contentAPI.SEARCH_GIFS }
        searchString = 'sport'
      />
      <ContentContainer
        title = 'Trending stikers'
        limit = '5'
        content = { contentAPI.TRENDING_STIKERS }
        searchString = ''
      />
    </div>
  );
}
