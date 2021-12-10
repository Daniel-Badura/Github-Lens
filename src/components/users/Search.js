import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [text, setText] = useState('');


    const onSubmit = e => {
        e.preventDefault();
        if (text.trim() === '') {
            setAlert('Please enter something', 'danger')
        } else {
            searchUsers(text);
            setText('');
        }

    };
    const onChange = e => setText(e.target.value);


    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    id="search"
                    placeholde="Search Users..."
                    value={text}
                    onChange={onChange} />
                <input
                    type="submit"
                    value="Search"
                    id=""
                    className="btn btn-block btn-success" />
            </form>
            {showClear && (<button className="btn btn-success btn-block" onClick={clearUsers}> Clear Search</button>)}

        </div>
    )
}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
export default Search
