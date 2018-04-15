import React from 'react';
import truncate from '../util/truncate';

/* Props:
 * @albumInfo: object
 */
export default (props) => {

  // get Album data
  const {
    artistName,
    collectionName,
    artworkUrl100
  } = props.albumInfo;

  return (
    <div className="l-column">

      <div className="album">

        <img className="album__img" src={ artworkUrl100 } alt={ collectionName }/>

        <div className="album__stub">
          <p className="album__title">{ truncate(collectionName, 21) }</p>
          <p className="album__artist">{ truncate(artistName, 44) }</p>
        </div>

      </div>
      
    </div>
  );

}
