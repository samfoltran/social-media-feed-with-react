import PostComments from './PostComments';
import LikePostButton from './LikePostButton';

function UserPosts(props){

    const posts = props.posts;
    const user_name = props.user_name;

    return(
        <div>
            <h1>You are seeing {user_name}'s posts</h1>
            <ul>
                {
                posts.map(post => (
                    <li key={post.title+post.text}>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>

                        <PostComments comments={post.comments} />

                        <p>Likes: {post.likes}</p>
                        <LikePostButton />
                    </li>
                ))
                }
            </ul>
        </div>
    );

} export default UserPosts;