import React from 'react';

const GiphyItem = (props) => {
  const giphy = props.giphy;
  const giphySelection = props.giphySelection;
  const embedUrl = giphy.embed_url;

  return (
    <li onClick={() => giphySelection(giphy)} src={embedUrl} className="list-group-item">
      <div className="">
        <iframe src={embedUrl} title="giphy" className="embed-giphy"></iframe>
      </div>
      <div>
        <h2>{giphy.title}</h2>
      </div>
    </li>
  );
};

export default GiphyItem;