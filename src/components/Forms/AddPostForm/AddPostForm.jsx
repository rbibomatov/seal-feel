import styles from "./AddPostForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/profile.reducer";
import ValidationMessage from "../../Common/ValidationMessage/ValidationMessage";

const AddPostForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
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
          required: "Пожалуйста, заполните поле",
          maxLength: {
            value: 1000,
            message: "Длина текста не должна превышать 1000 символов",
          },
        })}
        placeholder="Расскажите что-нибудь интересное!"
        onKeyDown={onKeyDown}
      ></textarea>
      <ValidationMessage messageText={errors?.postText?.message} />
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
