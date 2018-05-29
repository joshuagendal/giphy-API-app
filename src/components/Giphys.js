import React from 'react';

const Giphys = (props) => {
	const giphys = props.giphys;
	
	const giphyArray = giphys.map(giphy => {
		return (
			<div>
				<h1>{giphy.title}</h1>
				<iframe src={giphy.embed_url} frameborder="0"></iframe>
			</div>
		);
	});
	
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<h1 style={{textDecoration: 'underline'}}>GIPHYS COMPONENT</h1>
					{giphyArray}
				</div>
			</div>
		</div>
	);
};

export default Giphys;