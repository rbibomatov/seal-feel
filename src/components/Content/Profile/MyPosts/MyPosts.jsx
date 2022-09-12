import styles from "./MyPosts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addPost } from "../../../../redux/profile.reducer";
import Post from "./Post/Post.jsx";

const AddPostForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addPost(data.postText));
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
  const profilePage = useSelector((state) => state.profilePage);

  let postsElements = profilePage.posts.map((post) => {
    return (
      <Post
        id={post.id}
        key={"post_" + post.id}
        message={post.message}
        createTime={post.createTime}
        currentUserLogin={props.currentUserLogin}
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
