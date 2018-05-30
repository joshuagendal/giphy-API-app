import React from 'react';

const GiphyItem = (props) => {

	const giphy = props.giphy;
	const addSelectedGiphyToState = props.addSelectedGiphyToState;
	const title = giphy.title;
	const embedUrl = giphy.embed_url;
	return (
		<li onClick={() => {addSelectedGiphyToState(giphy)}} >
			<h2>{title}</h2>
			<iframe src={embedUrl}  className="embed-giphy" title="giphy-embed-URL" frameBorder="0"></iframe>
		</li>
	);	
};

export default GiphyItem;