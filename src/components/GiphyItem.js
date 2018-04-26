import React from 'react';

const GiphyItem = (props) => {
  // const giphy = props.giphy;
  const imgUrl = props.giphy.images.fixed_height_still.url;
  console.log(imgUrl);

  return (
    <li className="list-group-item">
      <div className="">
        <img src={imgUrl} alt="" />
      </div>
    </li>
  );
};

export default GiphyItem;