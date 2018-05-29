import React from 'react';

const Searchbar = (props) => {

	// API search function. Takes apiSearch method passed to this component as props
	let apiSearch = (term) => {
		props.giphyApiSearch(term);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<h1>ENTER API SEARCH</h1>
					<input 
						type="text"
						className="search-bar" 
						onChange={event => apiSearch(event.target.value)}/>
        </div>
      </div>
    </div>
	);

};

export default Searchbar;