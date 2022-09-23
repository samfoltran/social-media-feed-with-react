import React from 'react';
import UserPosts from './UserPosts';

import users from './users';

function Feed(props){

    const posts = users[0].posts;

    return (
        <UserPosts posts={posts} />
    );

} export default Feed;