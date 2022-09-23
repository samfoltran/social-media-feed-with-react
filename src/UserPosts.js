import PostComments from './PostComments';

function UserPosts(props){

    const posts = props.posts;

    return(
        <ul>
            {
            posts.map(post => (
                <li key={post.title+post.text}>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>

                    <PostComments comments={post.comments} />
                </li>
            ))
            }
        </ul>
    );

} export default UserPosts;