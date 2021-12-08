import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    state = {
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text.trim() === '') {
            this.props.setAlert('Please enter something', 'danger')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }

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
