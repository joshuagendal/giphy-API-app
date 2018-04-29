// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import request from 'request';

import Searchbar from './components/Searchbar';
import Giphys from './components/Giphys';
import GiphySelected from './components/GiphySelected';

const apiKey = '8elrFOLxKeb0UUqADqARHCFh7gt95hKp';
const baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
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
    this.giphyApiSearch('guitars');  
  }
    
  giphyApiSearch(searchTerm) {
    request({
      url: `${baseURL}${searchTerm}&api_key=${apiKey}&limit=${searchLimit}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log(`ERROR!: ${error}`);
      } else if (body.meta.status !== 200) {
        console.log('SERVER ISSUE!');
        console.log('status: ', body.meta.status)
      } else if (!body.data) {
        console.log('ZERO RESULTS! Try Again!');
      } else {
				console.log(body.data)
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
        <Searchbar apiSearchTerm={ (term) => {this.giphyApiSearch(term)} } />
        <GiphySelected giphy={this.state.selectedGiphy} />
        <Giphys giphySelection={ (selectedGiphy) => {this.setState({selectedGiphy})} }
        	giphys={this.state.giphys} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
