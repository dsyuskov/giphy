import React, {Component} from 'react';
import GiphyItem from './GiphyItem';
import '../scss/GiphyContainer.scss';

class GiphyContainer extends Component {
  render() {
    const { result } = this.props;

    if (result.length === 0) {
      return null;
    }

    return (
      <div className= "giphy">
        {result.map((item) => {
        return (
          <GiphyItem 
            key = {item.id}
            item = {item}
          />
          )
        })}
      </div>
    )
  }
}

export default GiphyContainer;
