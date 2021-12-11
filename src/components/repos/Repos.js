import React from 'react';
import ReposItem from './ReposItem';

const Repos = ({ repos }) => {
    return (<div
        style={repoStyle}>
        {
            repos.map(repo => (
                <ReposItem key={repo.id} repo={repo} />))}
    </div>);
};


const repoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'

};
export default Repos;
