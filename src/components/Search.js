import React, {Component} from 'react';

export default class Search extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.setState( {value: event.target.value} );
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  onClick(event) {
    this.props.onClick(this.state.value, 3);    
    event.preventDefault();
  }

  render() {        
    return(
      <form className="search"  onSubmit={this.onClick}>
        <input
          className = "search__input"
          type = "text"
          onChange = {this.handleChange}
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