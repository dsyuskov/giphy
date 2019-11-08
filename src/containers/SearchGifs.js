import React, {Component} from 'react';
import GiphySlider from '../components/GiphySlider';
import Search from '../components/Search';
import giphyService from '../services/giphy';

export default class SearchGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    }

    this.getSearch = this.getSearch.bind(this);
  }
  
  getSearch(offset, limit) {    
    giphyService.getSearch(offset, limit)
      .then((item) => this.setState({result: item}));
  }

  componentDidMount() {
    this.getSearch(0, 3);
  }

  render() {
    const { result } = this.state;       
    return (
      <div className="trendinggifs">
        <h2>Hello it is Searching gifs</h2>
        <Search 
          onClick = {this.getSearch}
        />
        { result && 
          <GiphySlider 
            result = {result}
          />
        }        
      </div>
    )
  }
}
