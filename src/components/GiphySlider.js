import React, {Component} from 'react';
import GiphyItem from './GiphyItem';
import './GiphySlider.scss';

class GiphySlider extends Component {
  render() {
    const {result} = this.props;
    return (
      <div className="giphySlider">        
        {result.map((item) => {
         return (          
            <GiphyItem 
            key = {item.id}
            item = {item}/>
          )
        })}   
      </div>
    )
  }
}

export default GiphySlider;
