import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//layouts
import MainLayout from './components/MainLayout'

//pages
import TrendingGifs from './components/TrendingGifs';
import SearchGifs from './components/SearchGifs';

export default(
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={ TrendingGifs } />
        <Route path="/tranding-gifs" component={ TrendingGifs } />
        <Route path="/search" component={ SearchGifs } />      
      </Switch>
    </MainLayout>    
  </BrowserRouter>
)
