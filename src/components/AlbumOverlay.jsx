import React from 'react';
import truncate from '../util/truncate';

/* Props:
 * @albumInfo: object
 */
export default (props) => {

  // get AlbumOverlay data
  const itunesUrl = 'https://www.apple.com/itunes/download/';
  const {
    artistName,
    collectionName,
    collectionPrice,
    artistViewUrl,
    collectionViewUrl
  } = props.albumInfo;

  return (
    <div className={ props.show ? "overlay overlay--active" : "overlay" }>

      <div className="overlay__stub">              
        
        <a className="overlay__title" href={ collectionViewUrl }>
          <h3>{ truncate(collectionName, 30) }</h3>
        </a>

        <a className="overlay__artist" href={ artistViewUrl }>
          <h3>{ truncate(artistName, 18) }</h3>
        </a>

      </div>

      <ul>
        <li className="overlay__list-item">
          <i className="fa fa-music"></i>
          <a className="overlay__link" href={ collectionViewUrl }>View Album</a>
        </li>
        <li className="overlay__list-item">
          <i className="fa fa-user"></i>
          <a className="overlay__link" href={ artistViewUrl }>Artist Page</a>
        </li>
        <li className="overlay__list-item">
          <i className="fa fa-download"></i>
          <a className="overlay__link" href={ itunesUrl }>Get iTunes</a>
        </li>

        <li className="overlay__price">
          <span>${ collectionPrice }</span>
        </li>
      </ul>

    </div>
  );

}
