import React from 'react';

const GiphyItem = (props) => {
  const giphy = props.giphy;
  console.log(giphy);

  return (
    <li className="list-group-item">
      <div className="">
        <h1>{giphy.id}</h1>
        <h1>{giphy.type}</h1>
        <h1>{giphy.url}</h1>
      </div>
    </li>
  );
};

export default GiphyItem;