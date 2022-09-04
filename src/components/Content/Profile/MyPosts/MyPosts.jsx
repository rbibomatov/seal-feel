import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { useForm } from "react-hook-form";

const AddPostForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.addPost(data.postText);
    reset();
  };

  return (
    <form className={styles.addPostForm} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.postTextArea}
        {...register("postText", {
          required: true,
        })}
        placeholder="Расскажите, как у вас дела?"
      ></textarea>
      <div>
        <button type="submit">Опубликовать</button>
      </div>
    </form>
  );
};

const MyPosts = (props) => {
  let profilePage = props.profilePage;

  let postsElements = profilePage.posts.map((post) => {
    return (
      <Post
        id={post.id}
        key={"post_" + post.id}
        message={post.message}
        createTime={post.createTime}
      />
    );
  });

  return (
    <div className={styles.myPosts}>
      <AddPostForm addPost={props.addPost} />
      {postsElements}
    </div>
  );
};

export default MyPosts;
