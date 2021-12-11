import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
// import {
//     SEARCH_USERS,
//     GET_USER,
//     CLEAR_USERS,
//     GET_REPOS,
//     SET_LOADING
// } from '../types';
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    // Clear Users
    // const clearUsers = () => dispatch({ type: CLEAR_USERS });


    // Set Loading
    // const setLoading = () => dispatch({ type: SET_LOADING });



    return (
        <GithubContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </GithubContext.Provider>
    );
};


// return <GithubContext.Provider
//     value={{
//         users: state.users,
//         user: state.user,
//         repos: state.repos,
//         loading: state.loading,
//         searchUsers,
//         clearUsers,
//         getUser,
//         getUserRepos
//     }}
// >
//     {props.children}
// </GithubContext.Provider>;

export default GithubState;