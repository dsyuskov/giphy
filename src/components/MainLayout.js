import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import Search from '../components/Search';
import SearchGifs from '../components/SearchGifs';
import giphyService from '../services/giphy';
import GiphyContainer from '../components/GiphyContainer';

const initSearch = {
  result: null,
  search: '',
  limit: 5,
  offset: 0
}

class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {...initSearch, limit: this.props.limit}    
    this.getContent = this.getContent.bind(this);
  }

  getContent(content, newSearch = this.state.search) {
    console.log(newSearch)
    const {offset, limit, result} = this.state;
    
    giphyService.getContent(content, offset, limit, newSearch)
      .then((item) => {
        console.log(item)
        const newResult = result === null? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.offset} )
      });
  }

  render() {
    const { result } = this.state;
    console.log(result);
    if (!result) {
      return (
        <div className="app">
          <header className="header">      
            <div className="header__logo">
              <h1>GIPHY</h1>
            </div>
            <ul className="menu header__menu">
              <li className="menu__item"><Link to="/">Home</Link></li>
              <li className="menu__item"><Link to="tranding-gifs">Tranding Gifs</Link></li>
              <li className="menu__item"><Link to="search">Search</Link></li>
              <li className="menu__item"><Link to="sport">Sport</Link></li>
              <li className="menu__item"><Link to="stikers">Stikers</Link></li>
              <li className="">              
                <Search
                  //onClick = {(item) => this.goSearchPage(item)}  
                  onClick = {(item) => this.getContent('search', item)}
                />              
              </li>            
            </ul>
          </header>
          <main>          
            {this.props.children}
          </main>
        </div>
      )
    } else {
    return (
      <div className="app">
        <header className="header">      
          <div className="header__logo">
            <h1>GIPHY</h1>
          </div>
          <ul className="menu header__menu">
            <li className="menu__item"><Link to="/">Home</Link></li>
            <li className="menu__item"><Link to="tranding-gifs">Tranding Gifs</Link></li>
            <li className="menu__item"><Link to="search">Search</Link></li>
            <li className="menu__item"><Link to="sport">Sport</Link></li>
            <li className="menu__item"><Link to="stikers">Stikers</Link></li>
            <li className="">              
              <Search
                //onClick = {(item) => this.goSearchPage(item)}  
                onClick = {(item) => this.getContent('search', item)}
              />              
            </li>            
          </ul>
        </header>
        <main>       
          hello   
          <GiphyContainer
            result = {result}            
          />     
        </main>
      </div>
    )
  }
}
}

export default withRouter(MainLayout);