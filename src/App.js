import React from 'react';
import giphyService from './services/giphy';
import GiphySlider from './components/GiphySlider';

class App extends React.Component {
  
  constructor(props) {             
    super(props);
    this.state = {
      result: null,              
    }
    this.onLoad = this.onLoad.bind(this);
  }

  limit = 3;   
  offset = 0;
  

  onSaveResult(result) {
    this.setState({result: result})    
  }

  onLoad(o, l) {    
    giphyService.getTranding(o, l)
      .then((item) => this.onSaveResult(item));
  }

  componentDidMount() {
    //this.onLoad(this.offset, this.limit);
  }

  render() {    
    const {result} = this.state;
    if (!result) return (
      <div className="App">            
          <button herf="#">back</button>
          <button herf="#" onClick = {() => {            
            this.onLoad(this.offset, this.limit);

          }}>next</button>
      </div>
    )
    

    return (      
      <div className="App">  
          <GiphySlider 
            result = {result}
          />
          <button herf="#" onClick = {() => {            
            this.onLoad(this.offset, this.limit);
            if (this.offset > 0){
              this.offset -= this.limit;
            }
            
          }}>back</button>

          <button herf="#" onClick = {() => {            
            this.onLoad(this.offset, this.limit);
            this.offset += this.limit;

          }}>next</button>
      </div>
    );
  }
}

export default App;
