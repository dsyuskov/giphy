import React, {Component} from 'react';
import GiphySlider from './GiphySlider';
import giphyService from '../services/giphy';

const initTrend = {
  result: null,  
  limit: 5,
  offset: 0,
  page: 0
}

export default class TrendingGifs extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.limit);
    this.state = {...initTrend, limit: this.props.limit}
    this.getTranding = this.getTranding.bind(this);
  }  

  getTranding(direction) {    
    const {offset, limit} = this.state; 
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

    giphyService.getTranding(newOffset, limit)
      .then((item) => this.setState( {result: item, offset: newOffset} ));      
  }

  componentDidMount() {    
    this.getTranding();
  }

  render() {    
    const { result } = this.state;
    
    if (!result) return null;
       
    return (
      <div className="trendinggifs">
        <h2>Tranding gifs</h2>
        <GiphySlider 
          result = {result}
          onClick = {(direction) => this.getTranding(direction)}
        />        
      </div>
    )
  }
}
