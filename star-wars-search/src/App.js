import React from 'react';
import Form from './SearchForm';
import './App.css';
import config from './config'
import ApiContext from './ApiContext'
import SearchItem from './searchItem'

export default class App extends React.Component {
  state = {
    searchResults: [],
    characterName: { value: '', touched: false },
    homeWorld: ''
  }

  static contextType = ApiContext;

  setCharacterName = characterName => {
    this.setState({ characterName: { value: characterName, touched: true } });
  };

  displayResults = (responseJson) => {
    let characterName = this.state.characterName.value.trim();
    let filteredSearch = [];
    responseJson.results.filter(function (result) {
      if (result.name.includes(characterName)) {
        filteredSearch.push(result)
      }
    })
    console.log(filteredSearch)
    return filteredSearch;
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}people`)
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson)
        let filteredSearch = this.displayResults(responseJson)
        this.setState({
          searchResults: filteredSearch
        })
        this.getHomeWorld();
        console.log(this.state.searchResults)
      })
      .catch(error => {
        console.error({ error })
      })
  }
  
  getHomeWorld = () => {
    let homeWorld;
    let url = this.state.searchResults[0].homeworld
    console.log('bang');
    fetch(`${url}`)
      .then(function (response) {
        return response.json();
      })
      .then((responseJson) => {
        console.log('boom')
        homeWorld = responseJson.name
        this.setState({
            homeWorld: homeWorld
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
        <Form handleSearchSubmit={this.handleSearchSubmit}
          characterName={this.state.characterName}
          setCharacterName={this.setCharacterName}/>
        <SearchItem searchResults={this.state.searchResults}
        homeWorld={this.state.homeWorld}/>
      </main>
    );
  }
}

