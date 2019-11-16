import React, { Component } from 'react';
import '../scss/giphyItem.scss';

export default class GiphyItem extends Component{
  render() {
    const { title, imageUrl } = this.props.item;
    return (
      <div className = "giphy-item">
        <img src = { imageUrl } alt = { title }></img>
      </div>
    )
  }
}
