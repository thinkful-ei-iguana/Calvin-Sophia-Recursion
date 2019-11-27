import React from 'react';
import Form from './SearchForm';
import './App.css';
import config from './config'
import ApiContext from './ApiContext'

export default class App extends React.Component {
  state = {
    searchResults: []
  }

  static contextType = ApiContext;

  handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}people`)
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson)
        let filteredSearch = this.context.displayResults(responseJson)
        this.setState({
          searchResults: filteredSearch
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <main className="App">
        <header className="header">
          <h1>Star Wars</h1>
        </header>
        <Form handleSearchSubmit={this.handleSearchSubmit} />
      </main>
    );
  }
}

