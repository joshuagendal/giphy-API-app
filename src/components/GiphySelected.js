import React from 'react';

// This giphy is the giphy the user selected via onClick cb function
const GiphySelected = ({giphy}) => {
	
	if (!giphy) {
		return (
			<div>Loading...</div>
		);
	}

	const imgUrl = giphy.images.fixed_height_still.url;
  
  return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<div className="">
						<img src={imgUrl} alt=""/>
					</div>
					<div className="">
						<h2>{giphy.title}</h2>
					</div>
				</div>
			</div>
		</div>
	);
  
}

export default GiphySelected;