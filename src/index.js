// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import request from "request";

import Giphys from './components/Giphys';

const apiKey = '8elrFOLxKeb0UUqADqARHCFh7gt95hKp';
const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
const searchTerm = 'guitars';
const searchLimit = 5;



// giphy API search URL: 
// baseURL + searchTerm + '&api_key=' + apiKey + '&limit=' + searchLimit



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      giphys: []
    };

    request({
      url: `${baseURL}${searchTerm}&api_key=${apiKey}&limit=${searchLimit}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log(`ERROR!: ${error}`);
      } else {
        console.log(body.data[0]);
        this.setState({
          giphys: body.data
        });
      }
    });



  };

  render() {
    return (
      <Giphys giphys={this.state.giphys} />
    );
  };
};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
