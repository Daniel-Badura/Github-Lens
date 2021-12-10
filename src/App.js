
import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';
import About from './components/pages/About';

class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  // Display initial results
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios
      .get(`https://api.github.com/search/users?q=Daniel-Badura&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });

  }
  // Search for Github users
  searchUsers = async username => {
    const res = await axios
      .get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });

  }
  // Get single Git user
  getUser = async username => {
    const res = await axios
      .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, user: res.data });

  }
  // Get user repos
  getUserRepos = async username => {
    const res = await axios
      .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=creted:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, repos: res.data });

  }
  // Display flash alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({ alert: null }), 10000)
  }
  // Clear user list 
  clearUsers = e => {
    this.setState({ users: [], loading: false });
  }

  render() {
    const { users, user, loading, alert, repos } = this.state;

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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:login' element={
                <Fragment>
                  <User
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading} />
                </Fragment>
              } />

            </Switch>


          </div>
        </div>
      </Router>
    )
      ;
  }

}

export default App;
