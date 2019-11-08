import React, {Component} from 'react';
import GiphySlider from './GiphySlider';
import giphyService from '../services/giphy';

export default class TrendingGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    }

    this.getTranding = this.getTranding.bind(this);
  }
  
  getTranding(offset, limit) {    
    giphyService.getTranding(offset, limit)
      .then((item) => this.setState({result: item}));
  }

  componentDidMount() {
    this.getTranding(0, 3);
  }

  render() {    
    const { result } = this.state;
    
    if (!result) return null;
       
    return (
      <div className="trendinggifs">        
        <h2>Hello it is Tranging gifs</h2>
        <GiphySlider 
          result = {result}
        />
      </div>
    )
  }
}
