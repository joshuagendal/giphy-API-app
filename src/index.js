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
const searchLimit = 14;



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
      } else if (body.meta.status != '200') {
        console.log('SERVER ISSUE!');
        console.log('status: ', body.meta.status)
        // ***TODO: add a server error page, and if this condition is met route user to page telling user that there is a server error and to please try again  
      } else if (body.data.length === 0) {
        console.log('ZERO RESULTS! Try Again!');
        // ***TODO: direct user to page telling them there were no results for their search term and to try again with another search term
      } else {
        console.log('STATUS: ', body.meta.status);
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
