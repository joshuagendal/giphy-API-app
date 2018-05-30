// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import request from 'request';

import Searchbar from './components/Searchbar';
import Giphys from './components/Giphys';
import GiphysSelected from './components/GiphysSelected';

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
      selectedGiphys: []
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
				console.log('SUCCESS DATA', body.data)
        this.setState({
          giphys: body.data,
          selectedGiphys: null
        });
      }
    });
	}
	
	addSelectedGiphyToState(giphy) {
		if (!this.state.selectedGiphys) {
			var selectedGiphys = [];
			selectedGiphys.push(giphy);
			this.setState({selectedGiphys});
		} else {
			var selectedGiphys = [...this.state.selectedGiphys];
			selectedGiphys.push(giphy);
			this.setState({selectedGiphys: selectedGiphys});
		}
	}

  render() {
    return (
      <div>
				<Searchbar giphyApiSearch={term => {this.giphyApiSearch(term)}} />
				<Giphys 
					giphys={this.state.giphys} 
					addSelectedGiphyToState={selectedGiphy => this.addSelectedGiphyToState(selectedGiphy)} />
				<GiphysSelected selectedGiphys={this.state.selectedGiphys} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
