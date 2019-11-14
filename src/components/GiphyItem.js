import React, {Component} from 'react';
import '../scss/GiphyItem.scss';

export default class GiphyItem extends Component{
  render() {
    const {title, imageUrl} = this.props.item;
    return (
      <div className = "giphyItem">
        <img src = { imageUrl } alt = { title }></img>
      </div>
    )
  }
}
