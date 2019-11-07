import React, {Component} from 'react';
import './GiphyItem.scss';

export default class GiphyItem extends Component{
  render() {
    const {id, title, image} = this.props.item;
    return (
      <div className = "giphyItem">        
        <img src={image.url} alt={title}></img>
      </div>
    )
  }
}
/*<div>{id}</div>
        <div>{title}</div>*/