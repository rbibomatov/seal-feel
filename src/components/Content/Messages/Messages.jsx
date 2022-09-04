import React from "react";
import styles from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useForm } from "react-hook-form";

const AddMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.addMessage(data.messageText);
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
  let messagesPage = props.messagesPage;

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

export default Messages;
