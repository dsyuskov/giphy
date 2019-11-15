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
    console.log('1 -'+newSearch + '-');
    console.log('2 -'+this.state.search + '-');
    const {offset, limit, result} = this.state;

    if (newSearch !== this.state.search) {
      console.log('new search')
    }
    
    giphyService.getContent(content, offset, limit, newSearch)
      .then((item) => {        
        //const newResult = (result === null || newSearch !== this.state.search)? [...item.value] : [...result, ...item.value];
        const newResult = result === null? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.offset, search: newSearch} )
      });
  }
  
  handleScroll() {
    const height = document.documentElement.offsetHeight;
    const offset = window.scrollY + window.innerHeight;
    //detect the end page
    if (offset >= height) {
      //this.getContent('search', this.state.search);
    }
  }

  componentDidMount() {
    // const search = this.props.location.state ?  this.props.location.state.search : '';
    // console.log('search');    
    // if (search && search !== '') {
    //   this.getContent('search', this.props.location.state.search);  
    // }
    
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
        
        {result && 
          <GiphyContainer
            result = {result}            
          />        
        }
        
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
