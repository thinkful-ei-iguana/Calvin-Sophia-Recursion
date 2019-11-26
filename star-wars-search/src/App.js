import React from 'react';
import Form from './SearchForm';
import SearchList from './searchList';
import './App.css';
import config from './config'

export default class App extends React.Component {
  state = {
    searchResults: []
  }

  handleSearchSubmit = () => {
    fetch(`${config.API_ENDPOINT}/people`)
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson)
        let filteredSearch = this.displayResults(responseJson)
        this.setState({
          searchResults: filteredSearch
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }





  render() {
    return (<main className="App">
      <header className="header">
        <h1>Star Wars</h1>
      </header>
      <Form handleSearchSubmit={this.handleSearchSubmit}/>
      <SearchList searchResults={this.state.searchResults} />
    </main>);
  }
}

