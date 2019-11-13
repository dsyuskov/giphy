import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//layouts
import MainLayout from './components/MainLayout'

//pages
import Home from './components/Home';
import TrendingGifs from './components/TrendingGifs';
import SearchGifs from './components/SearchGifs';

export default(
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/tranding-gifs" render={ () => (<TrendingGifs limit='20' page='trend'/>)} />
        <Route path="/search" render={ () => (<SearchGifs limit='20' page='search'/>) } />
      </Switch>
    </MainLayout>
  </BrowserRouter>
)
