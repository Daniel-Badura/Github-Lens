import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: "id",
        login: "mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://api.github.com/users/mojombo"
    }

    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt=""
                    className="round-img"
                    style={{ width: '60px' }} />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
