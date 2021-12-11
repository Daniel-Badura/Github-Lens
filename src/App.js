
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
const App = () => {
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

  // Get single Git user

  // Get user repos

  // Display flash alert
  const setAlert = (msg, type) => {

    setAlerts({ msg, type });
    setTimeout(() => setAlerts(null), 10000);
  };
  // Clear user list 


  // const { users, user, loading, alert, repos } = this.state;

  return (
    <GithubState>
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
                      setAlert={setAlert}
                    />
                    <Users />
                  </Fragment>
                }
              />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:userName' element={<User />} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
