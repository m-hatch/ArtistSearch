import React from 'react';
import Header from './Header';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      searchResults: {} 
    };
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/search?term=jack+johnson&entity=album&attribute=allArtistTerm')
      .then(response => response.json())
      .then(data => this.setState({ searchResults: data }));
  }

  render() {
    console.log(this.state.searchResults);
    return (
      <div className="app">

        <Header/>

      </div>
    );
  }
  
}
