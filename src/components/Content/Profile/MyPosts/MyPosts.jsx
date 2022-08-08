import myPostsClasses from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let posts = props.posts;

  let postsElements = posts.map((post) => {
    return <Post id={post.id} message={post.message} />;
  });

  return (
    <div className={myPostsClasses.myPosts}>
      <div className={myPostsClasses.addPostForm}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
