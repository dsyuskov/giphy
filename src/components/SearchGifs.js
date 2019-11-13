import React, {Component} from 'react';
import GiphySlider from '../components/GiphySlider';
import Search from '../components/Search';
import giphyService from '../services/giphy';

const initSearch = {  
  result: null,  
  search: '',
  limit: 5,
  offset: 0
}


export default class SearchGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {...initSearch, limit: this.props.limit}
    this.getSearch = this.getSearch.bind(this);
  }
  
  getSearch(newSearch, direction) {
    const { offset, limit } = this.state; 
    let newOffset;   
    switch(direction) {
      case 'next': {
        newOffset = offset + limit;
        break;
      }
      case 'back': {
        newOffset = offset - limit >= 0 ? offset - limit: 0;
        break;
      }
      default: {
        newOffset = offset
      }
    }
    
    giphyService.getSearch(newSearch, newOffset, limit)
      .then((item) => this.setState( {result: item, search: newSearch, offset: newOffset} ));          
  }

  componentDidMount() {
    this.getSearch(this.state.search);
  }

  render() {
    const { result } = this.state;       
    return (
      <div className="search">
        <h2>Hello it is Searching gifs</h2>
        <Search 
          onClick = {(item) => this.getSearch(item)}
        />
        { result && 
          <GiphySlider 
            result = {result}
            onClick = {(direction) => this.getSearch(this.state.search, direction)}
          />
        }        
      </div>
    )
  }
}
