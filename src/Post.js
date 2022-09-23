import {useState} from 'react';

import PostComments from './PostComments';
import LikePostButton from './LikePostButton';

function Post(props){

    const post = props.post;

    const [likes, setLikes] = useState(post.likes);

    const addLike = () => { setLikes(likes+1); }
    const subLike = () => { setLikes(likes-1); }

    return(
        <li>
            <h1>{post.title}</h1>
            <p>{post.text}</p>

            <PostComments comments={post.comments} />

            <p>Likes: {likes}</p>
            <LikePostButton
                addLike={addLike}
                subLike={subLike}
            />
        </li>
    );

} export default Post;