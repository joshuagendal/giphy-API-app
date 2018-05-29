import React from 'react';

const GiphyItem = (props) => {

	const giphy = props.giphy;
	const title = giphy.title;
	const embedUrl = giphy.embed_url;
	return (
		<li>
			<h2>{title}</h2>
			<iframe src={embedUrl} title="giphy-embed-URL" frameBorder="0"></iframe>
		</li>
	);	
};

export default GiphyItem;