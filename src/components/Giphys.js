import React from 'react';

import GiphyItem from './GiphyItem';

const Giphys = (props) => {

	const giphys = props.giphys;
	const giphySelection = props.giphySelection;
	const giphyArray = giphys.map((giphy) => {
		return (
      <GiphyItem
        giphySelection={giphySelection}
        key={giphy.id}
        giphy={giphy} />
		);
	});

  return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<ul style={{padding: 0}}>
						{giphyArray}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Giphys;