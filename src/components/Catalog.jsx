import React from 'react';
import Album from './Album';

/* Props:
 * @query: string
 * @albums: array
 * @count: number
 */
export default (props) => {

  // build Album components
  const albumsList = props.albums.map((album, index) => 
    <Album key={ index } albumInfo={ album } />
  );

  // build message
  const getMessage = () => {
    let message;

    if (props.query === '')
      message = 'Please enter an artist name to search.';
    else if (props.count === 0)
      message = `No results found for ${ props.query }`;
    else
      message = `Results 1 - ${ props.count } for ${ props.query }`;

    return message;
  }

  return (
    <div id="albums-container" className="catalog">

      <h2 className="catalog__message">{ getMessage() }</h2>

      <div className="l-row">
        { (props.albums.length) ? albumsList : null }
      </div>

    </div>
  );

}