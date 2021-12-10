import React from 'react';
import PropTypes from 'prop-types';


const ReposItem = ({ repo: { name, html_url } }) => {

    return (
        <div className="card text-center">
            <h3>{name}</h3>
            <div>
                <a href={html_url} className="btn btn-success btn-md my-1">Visit Repo</a>
            </div>
        </div>
    )

}

ReposItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default ReposItem
