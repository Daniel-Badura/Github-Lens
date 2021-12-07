import React from 'react';
import PropTypes from 'prop-types';


const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{
                    width: '100px',
                    margin: 'auto'
                }}
            />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-success btn-md my-1">More</a>
            </div>
        </div>
    )

}


UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem