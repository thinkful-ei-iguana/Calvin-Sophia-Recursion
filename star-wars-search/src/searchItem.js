import React, { Component } from "react";

export default class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }

    showResults = (
        <section>
            <h3 className="character-name">{this.props.searchResults[0].name}</h3>
            <p className="home-world">Homeworld: {this.props.searchResults[0].homeworld}</p>
            <p className="birth-year">Birth Year: {this.props.searchResults[0].birth_year}</p>
            <p className="gender">Gender: {this.props.searchResults[0].gender}</p>
        </section>
    );

    showDefault = (
        <section>
            <p>No one in this Galaxy....</p>
        </section>
    );

    render() {
        if (this.props.searchResults && this.props.searchResults.length > 0) {
            return (this.showResults);
        }
        else {
            return (this.showDefault);
        }
    }
}