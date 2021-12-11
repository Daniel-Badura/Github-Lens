import React, { useContext, useEffect } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import githubContext from '../../context/github/githubContext';
import { CLEAR_USERS, SEARCH_USERS } from '../../context/types';
import { searchUsers } from '../../context/github/actions';

const Home = () => {

    const { dispatch } = useContext(githubContext);

    useEffect(() => {
        dispatch({ type: CLEAR_USERS });
        searchUsers('daniel-badura').then((daniel) => {
            dispatch({ type: SEARCH_USERS, payload: daniel });
        });
    }, [dispatch]);



    return (
        <>
            <Search />
            <Users />
        </>
    );
};

export default Home;
