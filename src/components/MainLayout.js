import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';
import Header from '../components/Header';
import giphyService, { contentAPI }   from '../services/giphy';
import GiphyContainer from '../components/GiphyContainer';

const initSearch = {
  result: null,
  searchString: '',
  limit: 20,
  offset: 0
}

class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {...initSearch}
    this.getContent = this.getContent.bind(this);
  }

  getContent(content, newSearch = this.state.searchString) {
    
    this.props.history.push('/search');

    const {offset, limit, result, searchString} = this.state;
    let newOffset = offset;
   
    if ( newSearch !== searchString ) {
      newOffset = 0;
    }
    
    giphyService.getContent(content, newOffset, limit, newSearch)
      .then((item) => {
        const newResult = (result === null || newSearch !== this.state.searchString)? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.newOffset, searchString: newSearch} )
      });
  }

  render() {
    const { result } = this.state;
    const { pathname } = this.props.location;

    if (!result || pathname !== '/search') {
      return (
        <div className="app">
          <Header
            onClick = {(searchString) => this.getContent(contentAPI.SEARCH_GIFS, searchString)}            
          />
          <main className="main">
            {this.props.children}
          </main>
        </div>
      )
    } else {
      return (
        <div className="app">
          <Header 
            onClick = {(searchString) => this.getContent(contentAPI.SEARCH_GIFS, searchString)}            
          />
          <main className="main">
            <GiphyContainer
              result = {result}
            />
            {result.length > 10 &&
            <Button
              className = "button"
              value = "Load more"
              onClick = {() => this.getContent(contentAPI.SEARCH_GIFS)}
            />
            }
          </main>
        </div>
      )
    }
  }
}

export default withRouter(MainLayout);
