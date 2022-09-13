import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { v4 as uuidv4 } from "uuid";
import AddPostForm from "../../../Forms/AddPostForm/AddPostForm";

const MyPosts = (props) => {
  const postsElements = props.posts.reduce((posts, post) => {
    if (props.profileId === post.profileId) {
      posts.push(
        <Post
          key={uuidv4()}
          message={post.message}
          createTime={post.createTime}
          currentUserLogin={props.currentUserLogin}
          currentUserPhoto={props.currentUserPhoto}
        />
      );
    }

    return posts;
  }, []);

  return (
    <div className={styles.myPosts}>
      <AddPostForm addPost={props.addPost} profileId={props.profileId} />
      {postsElements}
    </div>
  );
};

export default MyPosts;
