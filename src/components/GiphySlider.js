import React, {Component} from 'react';
import GiphyItem from './GiphyItem';
import Button from './Button';
import './GiphySlider.scss';

class GiphySlider extends Component {
  render() {
    const { result } = this.props;
    let grid = '';
    if (result.length === 0) return null;
    if (result.length > 5) grid='--grid';
    return (
      
      <div className="slider">
        <div className={"slider__list"+grid}>
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
          clsssName="button button--back"
          value = "back"
          onClick = {() => this.props.onClick('back')}
        />
        <Button 
          clsssName="button button--next"
          value = "next"
          onClick = {() => this.props.onClick('next')}
        />        
      </div>
    )
  }
}

export default GiphySlider;
