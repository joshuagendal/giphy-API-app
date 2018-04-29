import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  apiSearch(term) {
    this.setState({term});
    this.props.apiSearchTerm(term);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <input 
              className="search-bar" 
              type="text"
              value={this.state.term}
              onChange={
                (event) => {
                  this.apiSearch(event.target.value)
                }
              }
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;