import React from 'react';

import GiphyItem from './GiphyItem';

const Giphys = (props) => {
	
	const giphyArray = props.giphys.map((giphy) => {
		return (
			<GiphyItem key={giphy.id} giphy={giphy} />
		);
	});

  return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-1">
					<ul>
						{giphyArray}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Giphys;