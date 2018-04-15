import React from 'react';
import truncate from '../util/truncate';

/* Props:
 * @albumInfo: object
 */
export default class Album extends React.Component {

  constructor() {
    super();
    this.state = { isHover: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(mouseEvent) {
    if ((mouseEvent.type === 'mouseenter') || (mouseEvent.type === 'mouseleave')) {
      this.setState(prevState => ({
        isHover: !prevState.isHover
      }));
    }
  }

  render() {

    // create Album data variables
    const {
      artistName,
      collectionName,
      artworkUrl100
    } = this.props.albumInfo;

    return (
      <div className="l-column">

        <div className="album" 
          onMouseEnter={ this.handleHover }
          onMouseLeave={ this.handleHover }>

          <img className="album__img" src={ artworkUrl100 } alt={ collectionName }/>

          <div className="album__stub">
            <p className="album__title">{ truncate(collectionName, 21) }</p>
            <p className="album__artist">{ truncate(artistName, 44) }</p>
          </div>

        </div>
        
      </div>
    );
  }

}
