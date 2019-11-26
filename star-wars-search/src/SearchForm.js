import React from 'react';


export default class FolderForm extends React.Component {
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
            return 'Folder Name must between 4 and 12 characters long'
        }
    }

    displayResults = (responseJson) => {
        let characterName = this.state.characterName.value.trim()
        responseJson.results.filter(function (result){
            return result.name === characterName
        })
    }


    render() {
        return (
            <form className="search-form" onSubmit={() => this.props.handleSearchSubmit()}>
                <label htmlFor="search-name">Who's name Shall you speak of?
                {this.state.characterName.touched &&
                        <p className="error">{this.validateSearchName()}</p>}
                </label>
                <input id="search-box" type="text" value={this.state.characterName.value}
                    onChange={e => this.setCharacterName(e.target.value)} />
                <button disabled={
                    this.validateCharacterName()
                }>Search the Galaxy!</button>
            </form>
        )
    }

}
