import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//layouts
import MainLayout from './components/MainLayout'

//pages
import TrendingGifs from './containers/TrendingGifs';
import SearchGifs from './containers/SearchGifs';

export default(
  <BrowserRouter>
    <MainLayout>
      <Route path="/tranding-gifs" component={ TrendingGifs } />
      <Route path="/search" component={ SearchGifs } />
    </MainLayout>
  </BrowserRouter>
)
