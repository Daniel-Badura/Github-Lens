import React, { Component } from "react";
import PropTypes from 'prop-types'


class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder'
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <nav className="navbar bg-danger "><h1>
                <i className='fab fa-github' />{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar;