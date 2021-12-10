
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';
import About from './components/pages/About';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlerts] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // }

  // Display initial results
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios
  //     .get(`https://api.github.com/search/users?q=Daniel-Badura&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ loading: false, users: res.data.items });

  // }
  // Search for Github users
  const searchUsers = async username => {
    setLoading(true);
    const res = await axios
      .get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);

  };
  // Get single Git user
  const getUser = async username => {
    const res = await axios
      .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);

  };
  // Get user repos
  const getUserRepos = async username => {
    const res = await axios
      .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=creted:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setRepos(res.data);


  };
  // Display flash alert
  const setAlert = (msg, type) => {

    setAlerts({ msg, type });
    setTimeout(() => setAlerts(null), 10000);
  };
  // Clear user list 
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };


  // const { users, user, loading, alert, repos } = this.state;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              element={
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              }
            />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/user/:login' element={
              <Fragment>
                <User
                  // {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading} />
              </Fragment>
            } />

          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
