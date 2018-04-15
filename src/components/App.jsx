import React from 'react';
import Header from './Header';
import Catalog from './Catalog';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      query: '',
      resultCount: 0,
      searchResults: [] 
    };
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(q) {
    this.setState({ query: q });
    
    fetch(`https://itunes.apple.com/search?term=${ q }&entity=album&attribute=allArtistTerm`)
      .then(response => response.json())
      .then(data => this.setState({ 
        resultCount: data.resultCount,
        searchResults: data.results 
      }));
  }

  render() {
    return (
      <div className="app">

        <Header submitSearch={ this.submitSearch } />

        <Catalog query={ this.state.query } 
          albums={ this.state.searchResults } 
          count={ this.state.resultCount } />

      </div>
    );
  }
  
}
