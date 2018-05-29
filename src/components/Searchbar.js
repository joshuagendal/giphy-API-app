import React from 'react';

class Searchbar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  };

  apiSearch(term) {
    this.setState({term});
    this.props.apiSearch(term);
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<h1>ENTER API SEARCH</h1>
            <input 
              type="text"
							className="search-bar" 
							value={this.state.term}
							onChange={event => this.apiSearch(event.target.value)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;