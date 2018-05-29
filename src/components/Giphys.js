import React from 'react';

import GiphyItem from './GiphyItem';

const Giphys = (props) => {
	const giphys = props.giphys;
	
	const giphyArray = giphys.map(giphy => {
		return (
			<GiphyItem 
				key={giphy.id}
				giphy={giphy} />
		);
	});
	
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<h1 style={{textDecoration: 'underline'}}>GIPHYS COMPONENT</h1>
						<ul style={{padding: '0'}}>
							{giphyArray}
						</ul>
				</div>
			</div>
		</div>
	);
};

export default Giphys;