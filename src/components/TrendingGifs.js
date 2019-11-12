import React, {Component} from 'react';
import GiphySlider from './GiphySlider';
import giphyService from '../services/giphy';
import Button from './Button';

const initState = {
  result: null,  
  limit: 5,
  offset: 0
}

export default class TrendingGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {...initState}
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
      .then((item) => {
        this.setState({result: item, offset: newOffset});
        console.log(newOffset, limit)});      
  }

  componentDidMount() {
    this.getTranding();
  }

  render() {    
    const { result } = this.state;
    
    if (!result) return null;
       
    return (
      <div className="trendinggifs">
        <h2>Hello it is Tranding gifs</h2>
        <GiphySlider 
          result = {result}
        />
        <div className="App">
          <Button 
            value = "back"
            onClick = {() => this.getTranding('back')}
          />
          <Button 
            value = "next"
            onClick = {() => this.getTranding('next')}
          />
        </div>
      </div>
    )
  }
}
