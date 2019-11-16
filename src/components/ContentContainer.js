import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import GiphyContainer from './GiphyContainer';
import giphyService from '../services/giphy';
import Button from './Button';
import '../scss/contentContainer.scss';

const initState = {
  result: null,
  searchString: '',
  limit: 5,
  offset: 0
}

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState }
    this.getContent = this.getContent.bind(this);
  }

  getContent(content, newOffset = this.state.offset, newLimit = this.state.limit, newSearchString = this.state.searchString) {
    const { result } = this.state;
    
    giphyService.getContent(content, newOffset, newLimit, newSearchString)
      .then((item) => {
        const newResult = (result === null || newOffset === 0 || newSearchString !== this.state.search) ? [...item.value] : [...result, ...item.value];
        this.setState( {result: newResult, offset: item.newOffset, searchString: newSearchString} )
      });
  }

  componentDidMount() {
    this.setState({ limit: this.props.limit, content: this.props.content, search: this.props.searchString })
    this.getContent(this.props.content, 0, this.props.limit, this.props.searchString);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.limit !== this.props.limit || prevProps.content !== this.props.content || this.props.searchString !== prevProps.searchString) {
      this.setState({ limit: this.props.limit, content: this.props.content, search: this.props.searchString })
      this.getContent(this.props.content, 0, this.props.limit, this.props.searchString);
    }
  }

  render() {
    const { result } = this.state;
    const { location, title } = this.props;

    if (!result) {
      return null;
    }

    let buttonIsNotVisible = '';

     if ( location.pathname === '/') {
      buttonIsNotVisible = ' isNotVisible';
     }

    return (
      <div className = "content-container">
        <h2 className = "content-container__title">{ title }</h2>
        <GiphyContainer
          result = { result }
        />
        <Button
          className = { "button" + buttonIsNotVisible }
          value = "Load more"
          onClick = { () => this.getContent(this.props.content) }
        />
      </div>
    )
  }
}

export default withRouter(ContentContainer);
