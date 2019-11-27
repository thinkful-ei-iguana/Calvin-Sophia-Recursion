import React, { Component } from "react";

export default class SearchItem extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }

    render() {
        let showResults;
        if (this.props.searchResults && this.props.searchResults.length > 0) {
            
            showResults = <section>
                <h3 className="character-name">{this.props.searchResults[0].name}</h3>
                <p className="home-world">Homeworld: {this.props.homeWorld}</p>
                <p className="birth-year">Birth Year: {this.props.searchResults[0].birth_year}</p>
                <p className="gender">Gender: {this.props.searchResults[0].gender}</p>
            </section>;
        }
        else {
            showResults = <section>
                <p>The Force grows restless</p>
            </section>;
        }

        return (
            <div>
                {showResults}
            </div>
        )
    }
}