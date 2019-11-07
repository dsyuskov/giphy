import React from 'react';
import giphyService from './services/giphy';
import Search from './components/Search';
import GiphySlider from './components/GiphySlider';

class App extends React.Component {
  
  constructor(props) {             
    super(props);
    this.state = {
      result: null,            
      search: '',
    }
    this.onLoad = this.onLoad.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  limit = 3;   
  offset = 0;
  

  onSaveResult(result) {    
    this.setState({result: result})    
  }

  onLoad(o, lim) {    
    giphyService.getTranding(o, lim)
      .then((item) => this.onSaveResult(item));
  }

  onSearch(searchString, lim) {    
    giphyService.getSearch(searchString, lim)
      .then((item) => this.onSaveResult(item));
  }

  componentDidMount() {
    this.onLoad(this.offset, this.limit);
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
        <Search           
          onClick = {this.onSearch}    
        />

        <GiphySlider 
          result = {result}
        />
        <button herf="#" onClick = {() => {    
          if (this.offset > 0){
            this.offset -= this.limit;
          }        
          this.onLoad(this.offset, this.limit);                        
        }}>back</button>

        <button herf="#" onClick = {() => {            
          this.offset += this.limit;
          this.onLoad(this.offset, this.limit);
        }}>next</button>
      </div>
    );
  }
}

export default App;
