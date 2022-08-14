import React from "react";
import myPostsClasses from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let profilePage = props.profilePage;
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost(profilePage.newPostText);
  };
  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  let postsElements = profilePage.posts.map((post) => {
    return <Post id={post.id} message={post.message} />;
  });

  return (
    <div className={myPostsClasses.myPosts}>
      <div className={myPostsClasses.addPostForm}>
        <textarea
          ref={newPostElement}
          cols="100"
          rows="5"
          value={profilePage.newPostText}
          placeholder="Расскажите, как у вас дела"
          onChange={onChangePost}
        />
        <div>
          <button onClick={onAddPost}>Add</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
