import {useState} from 'react';

import LikeCommentButton from './LikeCommentButton';

function Comment(props){

    const comment = props.comment;

    const [likes, setLikes] = useState(comment.likes);

    const addLike = () => { setLikes(likes+1); }
    const subLike = () => { setLikes(likes-1); }

    return(
        <li>
            <p>
                {comment.text} ({likes}) likes
                <LikeCommentButton
                    addLike={addLike}
                    subLike={subLike}
                />
            </p>
        </li>
    );

} export default Comment;