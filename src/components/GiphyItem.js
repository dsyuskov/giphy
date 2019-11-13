import React, {Component} from 'react';
import './GiphyItem.scss';

export default class GiphyItem extends Component{
  render() {
    const {id, title, image} = this.props.item;
    return (
      <div className = "giphyItem">
        <img src="" alt={id} />        
      </div>
    )
  }
}
//<img src={image.url} alt={title}></img>