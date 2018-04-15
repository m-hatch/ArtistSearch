import React from 'react';
import Search from './Search';

/* Props:
 * @submitSearch: function
 */
export default (props) => {

  return (
    <div className="header">

      <h1 className="header__title">
        Search for albums by your favorite artists
      </h1>

      <Search submitSearch={ props.submitSearch } />

    </div>
  );

}