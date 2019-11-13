import React, {Component} from 'react';
import GiphyItem from './GiphyItem';
import Button from './Button';
import './GiphySlider.scss';

class GiphySlider extends Component {
  render() {
    const { result } = this.props;

    if (result.length === 0) return null;

    return (
      <div>
        <div className="giphySlider">        
          {result.map((item) => {
          return (          
              <GiphyItem 
                key = {item.id}
                item = {item}
              />            
            )
          })}   
        </div>
        <Button 
          value = "back"
          onClick = {() => this.props.onClick('back')}
        />
        <Button 
          value = "next"
          onClick = {() => this.props.onClick('next')}
        />        
      </div>
    )
  }
}

export default GiphySlider;
