import React from 'react';
import ApiContext from './ApiContext'

export default class FolderForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }



    state = {
        characterName: { value: '', touched: false },
    };

    setCharacterName = characterName => {
        this.setState({ characterName: { value: characterName, touched: true } });
    };


    validateSearchName = () => {
        let characterName = this.state.characterName.value.trim();
        if (characterName === 0) {
            return "Character Name is required"
        }
        else if (characterName.length < 4 || characterName.length > 12) {
            return 'Character Name must between 4 and 12 characters long'
        }
    }

    displayResults = (responseJson) => {
        let characterName = this.state.characterName.value.trim();
        responseJson.results.filter(function (result) {
            return result.name.includes(characterName)
        })

    }

    render() {
        const value = {
            displayResults: this.displayResults
        };
        return (
            <ApiContext.Provider value={value}>
                <form className="search-form" onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                    <label htmlFor="search-name">Who's Name Shall you speak of?
                {this.state.characterName.touched &&
                            <p className="error">{this.validateSearchName()}</p>
                        }
                    </label>
                    <input id="search-box" type="text" value={this.state.characterName.value}
                        onChange={e => this.setCharacterName(e.target.value)} />
                    <button disabled={
                        this.validateSearchName()
                    }>Search the Galaxy!</button>
                </form>
            </ApiContext.Provider>
        )
    }

}
