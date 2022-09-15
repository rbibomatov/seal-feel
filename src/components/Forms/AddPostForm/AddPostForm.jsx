import styles from "./AddPostForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/profile.reducer";

const AddPostForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addPost(data.postText, props.profileId));
    reset();
  };

  const onKeyDown = (e) => {
    if ((e.key === "Enter" || e.code === "NumpadEnter") && !e.shiftKey) {
      e.preventDefault();
      document.getElementById("addPostButton").click();
    }
  };

  return (
    <form className={styles.addPostForm} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.postTextArea}
        {...register("postText", {
          required: true,
          maxLength: 1000,
        })}
        placeholder="Расскажите что-нибудь интересное!"
        onKeyDown={onKeyDown}
      ></textarea>
      <div>
        <button
          id="addPostButton"
          className={styles.addPostButton}
          type="submit"
        >
          Опубликовать
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
