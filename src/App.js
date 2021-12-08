
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios
      .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data });

  }

  searchUsers = async text => {
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });

  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({ alert: null }), 10000)

  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
      ;
  }

}

export default App;
