import React from 'react';

const GiphyItem = (props) => {
  const giphy = props.giphy;
  const giphySelection = props.giphySelection;
  const imgUrl = giphy.images.fixed_height_still.url;

  return (
    <li onClick={() => giphySelection(giphy)} className="list-group-item">
      <div className="">
        <img src={imgUrl} alt="" />
      </div>
      <div>
        <h2>{giphy.title}</h2>
      </div>
    </li>
  );
};

export default GiphyItem;