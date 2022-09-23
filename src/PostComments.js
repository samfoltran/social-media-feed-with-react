function PostComments(props){

    const comments = props.comments;

    return(
        <ul>
            {
            comments.map(comment => (
                <li key={comment.text}>
                    <p>{comment.text}</p>
                </li>
            ))
            }
        </ul>
    );

} export default PostComments;