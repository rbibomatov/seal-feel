import styles from "./Messages.module.css";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addMessage } from "../../../redux/messages.reducer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const AddMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addMessage(data.messageText));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("messageText", {
          required: true,
        })}
        cols="50"
        rows="5"
        placeholder="Введите свое сообщение..."
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};

const Messages = (props) => {
  const messagesPage = useSelector((state) => state.messagesPage);

  let dialogsElements = messagesPage.dialogs.map((dialogData) => {
    return (
      <Dialog
        id={dialogData.id}
        key={"dialog_" + dialogData.id}
        name={dialogData.name}
      />
    );
  });
  let messagesElements = messagesPage.messages.map((messageData) => {
    return (
      <Message
        id={messageData.id}
        key={"message_" + messageData.id}
        message={messageData.message}
      />
    );
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div className={styles.newMessage}>
        <AddMessageForm addMessage={props.addMessage} />
      </div>
    </div>
  );
};

export default withAuthRedirect(Messages);
