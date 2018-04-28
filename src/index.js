// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import request from "request";

import Giphys from './components/Giphys';
import GiphySelected from './components/GiphySelected';

const apiKey = '8elrFOLxKeb0UUqADqARHCFh7gt95hKp';
const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
const searchTerm = 'guitars';
const searchLimit = 14;



// giphy API search URL: 
// baseURL + searchTerm + '&api_key=' + apiKey + '&limit=' + searchLimit



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      giphys: [],
      selectedGiphy: null
    };  

    request({
      url: `${baseURL}${searchTerm}&api_key=${apiKey}&limit=${searchLimit}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log(`ERROR!: ${error}`);
      } else if (body.meta.status != '200') {
        console.log('SERVER ISSUE!');
        console.log('status: ', body.meta.status)
      } else if (body.data.length === 0) {
        console.log('ZERO RESULTS! Try Again!');
      } else {
        this.setState({
          giphys: body.data,
          selectedGiphy: body.data[0]  
        });
      }
    });

  }

  render() {
    return (
      <div>
        <GiphySelected giphy={this.state.selectedGiphy} />
        <Giphys 
          giphySelection={ selectedGiphy => {this.setState({selectedGiphy})} }
          giphys={this.state.giphys} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
