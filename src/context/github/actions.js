import axios from 'axios';

// Search Users
const searchUsers = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    return res.data.items;

};
// Get User
const getUser = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    return res.data;


};
// Get Repos
const getUserRepos = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=creted:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    return res.data;
};

export { getUser, getUserRepos, searchUsers };