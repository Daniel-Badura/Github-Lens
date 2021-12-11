import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import { getUser, getUserRepos } from '../../context/github/actions';
import { GET_USER, GET_REPOS, SET_LOADING } from '../../context/types';




const User = () => {
    // useEffect(() => {
    //     dispatch({ type: SET_LOADING });
    //     get;
    //     getUserAndRepos(userName).then((res) =>
    //         dispatch({ type: GET_USER_AND_REPOS, payload: res })
    //     );
    // }, [dispatch, userName]);   
    const {
        user: {
            name,
            avatar_url,
            location,
            bio,
            login,
            html_url,
            followers,
            following,
            public_gists,
            public_repos,
            hireable,
            blog,
            company
        },
        loading,
        dispatch,
        repos
    } = useContext(GithubContext);

    // useEffect(() => {
    //     getUser(login);
    //     getUserRepos(login);
    //     
    // }, []);

    const { userName } = useParams();

    useEffect(() => {
        dispatch({ type: SET_LOADING });
        getUser(userName).then((res) =>
            dispatch({ type: GET_USER, payload: res })
        );

    }, [dispatch, userName]);
    useEffect(() => {
        dispatch({ type: SET_LOADING });
        getUserRepos(userName).then((res) =>
            dispatch({ type: GET_REPOS, payload: res })
        );
    }, [dispatch, userName]);


    if (loading) return <Spinner />;
    return <>
        <Link to='/' className="btn btn-light">
            Back to Search
        </Link>
        Hireable: {' '}{hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
        <div className="card grid-2">
            <div className="all-center">
                <img
                    src={avatar_url}
                    className="round-img"
                    alt=''
                    style={{ width: '200px' }}
                ></img>
                <h1>{name}</h1>
                <p> Location: {location}</p>
            </div>
            <div>
                {bio && (
                    <>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </>
                )}
                <a href={html_url} className="btn btn-dark my-1">
                    Visit Github Profile
                </a>
                <ul>
                    <li>
                        {login && <>
                            <strong>Username: </strong> {login}</>}
                    </li>
                    <li>
                        {company && <>
                            <strong>Company: </strong> {company}</>}
                    </li>
                    <li>
                        {blog && <>
                            <strong>Website: </strong> {blog}</>}
                    </li>
                </ul>

            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers} </div>
            <div className="badge badge-success">Following: {following} </div>
            <div className="badge badge-light">Public Repos: {public_repos} </div>
            <div className="badge badge-dark">Public Gists: {public_gists} </div>
        </div>
        <Repos repos={repos} />
    </>;
};
export default User;

