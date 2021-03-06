import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers } from '../../context/github/actions';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../../context/types';


const Search = () => {
    const { dispatch, users } = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');


    const onSubmit = e => {
        e.preventDefault();
        if (text.trim() === '') {
            alertContext.setAlert('Please enter something', 'danger');
        } else {
            dispatch({ type: SET_LOADING });
            alertContext.removeAlert();

            searchUsers(text).then((users) => {
                dispatch({ type: SEARCH_USERS, payload: users });
                setText('');
            });

        };
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
            {users.length > 0 && (<button className="btn btn-light btn-block" onClick={() => dispatch({ type: CLEAR_USERS })}> Clear Search</button>)}

        </div>
    );
};

export default Search;
