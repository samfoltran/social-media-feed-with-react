import Comment from './Comment';

function PostComments(props){

    const comments = props.comments;

    return(
        <ul>
            {
            comments.map(comment => (
                <Comment key={comment.text} comment={comment} />
            ))
            }
        </ul>
    );

} export default PostComments;