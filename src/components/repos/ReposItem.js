import React from 'react';


const ReposItem = ({ repo }) => {

    return (
        <div className="card text-center">
            <h3>{repo.name}</h3>
            <h5>{repo.description}</h5>
            <div>
                <a href={repo.html_url} className="btn btn-success btn-md my-1">Visit Repo</a>
            </div>
        </div>
    );

};


export default ReposItem;
