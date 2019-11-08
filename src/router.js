import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//layouts
import MainLayout from './components/MainLayout'

//pages
import TrendingGifs from './components/TrendingGifs';
import Search from './components/Search';

export default(  
  <BrowserRouter>
    <MainLayout>       
      <Route path="/tranding-gifs" component={ TrendingGifs } />
      <Route path="/search" component={Search} />              
    </MainLayout>
  </BrowserRouter>  
)
