import React, {Component} from 'react';
import '../scss/search.scss';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return(
      <form 
        className = "search"
        onSubmit = { (event) => {
          this.props.onClick(this.state.search);
          event.preventDefault();} }>
        <input
          className = "search__input"
          type = "text"
          onChange = { this.handleChange }
        />
        <input
          className = "search__button"
          type = "submit"
          value = "Search"
        />
      </form>
    )
  }
}
