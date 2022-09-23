import Post from './Post';

function UserPosts(props){

    const posts = props.posts;
    const user_name = props.user_name;

    return(
        <div>
            <h1>You are seeing {user_name}'s posts</h1>
            <ul>
                {
                posts.map(post => (
                    <Post key={post.title+post.text} post={post} />
                ))
                }
            </ul>
        </div>
    );

} export default UserPosts;