import React from 'react';

// This giphy is the giphy the user selected via onClick cb function
const GiphySelected = ({giphy}) => {
	
	if (!giphy) {
		return (
			<div>Loading...</div>
		);
	}

	console.log(giphy.title);
  const embedUrl = giphy.embed_url;
	const imgUrl = giphy.images.fixed_height_still.url;
  

  return (
		<div className="container-fluid">
			<div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <li src={embedUrl}>
            <div className="">
              <iframe src={embedUrl} title="giphy" className="embed-giphy"></iframe>
            </div>
							<div className="">
              	<h2>{giphy.title}</h2>
							</div>
          </li>


				</div>
			</div>
		</div>
	);
  
}

export default GiphySelected;