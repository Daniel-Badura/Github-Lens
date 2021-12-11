import React, { useContext, useEffect } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import githubContext from '../../context/github/githubContext';
import { CLEAR_USERS } from '../../context/types';

const Home = () => {
    const { dispatch } = useContext(githubContext);
    useEffect(() => { dispatch({ type: CLEAR_USERS }); }, [dispatch]);


    return (
        <>
            <Search />
            <Users />
        </>
    );
};

export default Home;
