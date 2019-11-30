import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import { contentAPI }   from '../services/giphy';
import ContentContainer from './ContentContainer';

class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = { searchString: '' }
    this.searchContent = this.searchContent.bind(this);
  }

  searchContent(searchString) {
    this.props.history.push('/search');
    this.setState({ searchString: searchString });
  }

  render() {
    const { pathname } = this.props.location;

    if (pathname !== '/search') {
      return (
        <div className="app">
          <Header
            onClick = { (searchString) => this.searchContent(searchString) }
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
            onClick = { (searchString) => this.searchContent(searchString) }
          />
          <main className="main">
            <ContentContainer
              title = "Search result"
              limit = "20"
              content = { contentAPI.SEARCH_GIFS }
              searchString = { this.state.searchString }
            />
          </main>
        </div>
      )
    }
  }
}

export default withRouter(MainLayout);
