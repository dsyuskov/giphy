import React, {Component} from 'react';
import GiphySlider from './GiphySlider';
import giphyService from '../services/giphy';

const initTrend = {
  result: null,
  limit: 5,
  offset: 0
}

export default class TrendingGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {...initTrend, limit: this.props.limit}
    this.handleScroll = this.handleScroll.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  getContent(content) {
    const {offset, limit, result} = this.state;
    
    giphyService.getContent(content, offset, limit)
      .then((item) => {
        const newResult = result === null? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.offset} )
      });
  }

  handleScroll() {    
    const height = document.documentElement.offsetHeight;
    const offset = window.scrollY + window.innerHeight;
    //detect end page
    if (offset >= height) {
      this.getContent('trend');
    }      
  }

  componentDidMount() {
    if (this.props.page === 'trend') {
      document.addEventListener('scroll', this.handleScroll);
    }

    this.getContent('trend');
  }

  componentWillUnmount() {
    if (this.props.page === 'trend') {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { result } = this.state;
    
    if (!result) return null;
       
    return (
      <div className="trand">
        <h2 className="trand__title">Tranding GIFs</h2>
        <GiphySlider
          result = {result}
          onClick = {() => this.getContent('trend')}
        />
      </div>
    )
  }
}
