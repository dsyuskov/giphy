import React from 'react';
import giphyService from './services/giphy';
import GiphySlider from './components/GiphySlider';

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

  onLoad() {
    giphyService.getTranding()
    .then((item) => this.onSaveResult(item));
  }

  componentDidMount() {
    this.onLoad();
  }

  render() {    
    const {result} = this.state;
    if (!result) return null;

    return (      
      <div className="App">  
          <GiphySlider 
            result = {result}
          />
      </div>
    );
  }
}

export default App;
