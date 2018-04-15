import React from 'react';

export default (props) => {

  return (
    <div className="header">

      <h1 className="header__title">
        Search for albums by your favorite artists
      </h1>

      <input autoFocus="" type="text" title="Search" 
          placeholder="Enter your favorite artist to search iTunes ..."/>

      <button type="button">
        <i className="fa fa-search"></i>
      </button>
        

    </div>
  );

}