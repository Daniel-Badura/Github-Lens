import React, { Component } from 'react';

export class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="text"
                        id="search"
                        placeholde="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange} />
                    <input
                        type="submit"
                        value="Search"
                        id=""
                        className="btn btn-block btn-success" />
                </form>
            </div>
        )
    }
}

export default Search
