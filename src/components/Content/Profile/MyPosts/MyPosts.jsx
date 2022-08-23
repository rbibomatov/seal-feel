import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let profilePage = props.profilePage;
  let newPostElement = React.createRef();

  let onAddPost = () => {
    if (profilePage.postText) {
      props.addPost(profilePage.postText);
    }
  };
  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  let postsElements = profilePage.posts.map((post) => {
    return <Post id={post.id} key={"post_" + post.id} message={post.message} />;
  });

  return (
    <div className={styles.myPosts}>
      <div className={styles.addPostForm}>
        <textarea
          ref={newPostElement}
          cols="120"
          rows="5"
          value={profilePage.postText}
          placeholder="Расскажите, как у вас дела?"
          onChange={onChangePost}
        />
        <div>
          <button onClick={onAddPost}>Опубликовать</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
