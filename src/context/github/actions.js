import axios from 'axios';
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}


// Search Users
const searchUsers = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/search/users?q=${username}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    return res.data.items;

};
// Get User
const getUser = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    return res.data;


};
// Get Repos
const getUserRepos = async username => {
    // setLoading();
    const res = await axios
        .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=creted:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    return res.data;
};

export { getUser, getUserRepos, searchUsers };