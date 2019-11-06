import React from 'react';
import giphyService from './services/giphy';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: null,
    }
  }

  onSaveResult(result) {
    this.setState({result: result})    
  }

  componentDidMount() {
    giphyService.getTranding()
    .then((item) => this.onSaveResult(item));
  }

  render() {    
    const {result} = this.state;
    if (!result) return null;

    return (
      <div className="App">  

          {result.map((item => {
            return (
              <div>{item.id}</div>
            )
          }))}        
      </div>
    );
  }
}

export default App;
