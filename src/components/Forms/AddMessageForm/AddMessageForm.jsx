import styles from "./AddMessageForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../redux/messages.reducer";
import ValidationMessage from "../../Common/ValidationMessage/ValidationMessage";

const AddMessageForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const recipientId = useSelector(
    (state) => state.messagesPage.activeRecipientId
  );
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addMessage(data.messageText, currentUser, recipientId));
    reset();
  };

  const onKeyDown = (e) => {
    if ((e.key === "Enter" || e.code === "NumpadEnter") && !e.shiftKey) {
      e.preventDefault();
      document.getElementById("addMessageButton").click();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.addMessageArea}
        {...register("messageText", {
          required: "Пожалуйста, заполните поле",
          maxLength: {
            value: 1000,
            message: "Длина текста не должна превышать 1000 символов",
          },
        })}
        placeholder="Введите свое сообщение..."
        onKeyDown={onKeyDown}
      ></textarea>
      <ValidationMessage messageText={errors?.messageText?.message} />
      <div>
        <button
          id="addMessageButton"
          className={styles.addMessageButton}
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default AddMessageForm;
