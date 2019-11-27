import React from 'react';
import ApiContext from './ApiContext'

export default class FolderForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }


    validateSearchName = () => {
        let characterName = this.props.characterName.value.trim();
        if (characterName === 0) {
            return "Character Name is required"
        }
        else if (characterName.length < 4 || characterName.length > 12) {
            return 'Character Name must between 4 and 12 characters long'
        }
    }

    render() {
        return (
                <form className="search-form" onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                    <label htmlFor="search-name">Who's Name Shall you speak of?
                {this.props.characterName.touched &&
                            <p className="error">{this.validateSearchName()}</p>
                        }
                    </label>
                    <input id="search-box" type="text" value={this.props.characterName.value}
                        onChange={e => this.props.setCharacterName(e.target.value)} />
                    <button disabled={
                        this.validateSearchName()
                    }>Search the Galaxy!</button>
                </form>
        )
    }

}
