import React from 'react';
import Header from './Header';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      query: '',
      searchResults: {} 
    };
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(q) {
    console.log(q);
    this.setState({ query: q });
    fetch(`https://itunes.apple.com/search?term=${ q }&entity=album&attribute=allArtistTerm`)
      .then(response => response.json())
      .then(data => this.setState({ searchResults: data }));
  }

  render() {
    console.log(this.state.searchResults);
    return (
      <div className="app">

        <Header submitSearch={ this.submitSearch } />

      </div>
    );
  }
  
}
