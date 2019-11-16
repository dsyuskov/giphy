import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {contentAPI} from './services/giphy';

import MainLayout from './components/MainLayout'
import Home from './components/Home';
import ContentContainer from './components/ContentContainer';

export default(
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route
          exact path = "/"
          component = { Home } 
        />
        <Route
          path = "/tranding"
          render = { (props) => (
            <ContentContainer 
              title = "Trending gifs"
              limit = "20"
              content = { contentAPI.TRENDING_GIFS }
              searchString = ""
            />)}
        />
        <Route
          path = "/animals"
          render = { (props) => (
            <ContentContainer 
              title = "Animals gifs"
              limit = "20"
              content = { contentAPI.SEARCH_GIFS }
              searchString = "animals"
            />)}
        />
        <Route
          path = "/memes"
          render = { (props) => (
            <ContentContainer
              title = "Memes gifs"
              limit = "20"
              content = { contentAPI.SEARCH_GIFS }
              searchString = "memes"
            />)}
        />
        <Route
          path = "/sport"
          render = { (props) => (
            <ContentContainer
              title = "Sport gifs"
              limit = "20"
              content = { contentAPI.SEARCH_GIFS }
              searchString = "sport"
            />)}
        />
        <Route
          path = "/stikers"
          render = { (props) => (
            <ContentContainer
              title = "Trending stikers"
              limit = "20"
              content = { contentAPI.TRENDING_STIKERS }
              searchString = ""
            />)}
        />
      </Switch>
    </MainLayout>
  </BrowserRouter>
)
