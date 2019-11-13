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
    this.handleScroll = this.handleScroll.bind(this);
    this.getContent = this.getContent.bind(this);
  }
  
  getContent(content, newSearch = this.state.search) {
    const {offset, limit, result} = this.state;
    
    giphyService.getContent(content, offset, limit, newSearch)
      .then((item) => {        
        const newResult = result === null? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.offset, search: newSearch} )
      });
  }
  
  handleScroll() {
    const height = document.documentElement.offsetHeight;
    const offset = window.scrollY + window.innerHeight;
    //detect the end page
    if (offset >= height) {
      this.getContent('search', this.state.search);
    }
  }

  componentDidMount() {
    if (this.props.page === 'search') {
      document.addEventListener('scroll', this.handleScroll);
    }
    
    this.getContent('search', this.state.search);
  }

  componentWillUnmount() {
    if (this.props.page === 'search') {
      document.removeEventListener('scroll', this.handleScroll);
    }    
  }

  render() {
    const { result } = this.state;
    return (
      <div className="search">
        <h2>Hello it is Searching gifs</h2>
        <Search
          onClick = {(item) => this.getContent('search', item)}
        />
        { result && 
          <GiphySlider
            result = {result}
            onClick = {() => this.getContent('search', this.state.search)}
          />
        }
      </div>
    )
  }
}
