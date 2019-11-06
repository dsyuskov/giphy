import React from 'react';
import giphyService from './services/giphy';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const a = giphyService.helloWorld()
    console.log(a);  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">     
          <div>Welcome to giphy</div>
        </header>
      </div>
    );
  }
}

export default App;
