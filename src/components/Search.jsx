import React from 'react';

/* Props:
 * @submitSearch: function
 */
export default (props) => {

  // capture input element
  let searchInput;

  // submit query
  const clickHandler = (e) => {
    props.submitSearch(searchInput.value);
    searchInput.value = '';
    searchInput.focus();
  }

  // submit query if enter key is pressed
  const keydownHandler = (e) => {
    if (e.keyCode === 13)
      clickHandler(e);
  }

    return (
      <div className="search">

        <input className="search__input" 
          ref={ el => searchInput = el }
          autoFocus="" 
          type="text" 
          title="Search" 
          placeholder="Enter your favorite artist to search iTunes ..."
          onKeyDown={ keydownHandler }/>

        <button className="search__btn" type="button" onClick={ clickHandler }>
          <i className="fa fa-search"></i>
        </button>

      </div>
    );
  
}
