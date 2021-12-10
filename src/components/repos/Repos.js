import React from 'react';
import ReposItem from './ReposItem';
import Spinner from '../layout/Spinner';

const Repos = ({ repos, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={repoStyle} >
                {repos.map(repo => (
                    <ReposItem key={repo.id} repo={repo} />
                ))}
            </div>
        )
    }
}

const repoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'

}
export default Repos
