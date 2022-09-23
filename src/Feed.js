import React from 'react';
import UserPosts from './UserPosts';

import users from './users';

function Feed(props){

    const posts = users[0].posts;
    const user_name = users[0].name;

    return (
        <UserPosts
            user_name = {user_name}
            posts={posts}
        />
    );

} export default Feed;