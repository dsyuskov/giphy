import React, {Component} from 'react';
import GiphyContainer from '../components/GiphyContainer';
import Search from '../components/Search';
import giphyService from '../services/giphy';
import Button from './Button';

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
    
    //this.getContent('search', this.state.search);
  }

  componentWillUnmount() {
    if (this.props.page === 'search') {
      document.removeEventListener('scroll', this.handleScroll);
    }    
  }

  render() {
    const { result } = this.state;
    const { page } = this.props;

    let buttonClassVisible = '';

    if (page === 'home') {      
      buttonClassVisible = ' notVisible';
   }
    return (
      <div className="search">
        <h2>Hello it is Searching gifs</h2>
        <Search
          onClick = {(item) => this.getContent('search', item)}
        />
        {console.log(result)}
        {result && 
          <GiphyContainer
            result = {result}            
          />        
        }
        {console.log(result)}
        {result && 
          <Button 
            className = {"button" + buttonClassVisible}
            value = "Load more"
            onClick = {() => this.getContent('search', this.state.search)}
          />
        }
      </div>
    )
  }
}
