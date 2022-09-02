import React from "react";
import styles from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
  let messagesPage = props.messagesPage;
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    if (messagesPage.newMessageText) {
      props.addMessage(messagesPage.newMessageText);
    }
  };
  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  };

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
        <textarea
          ref={newMessageElement}
          cols="50"
          rows="5"
          value={messagesPage.newMessageText}
          placeholder="Введите свое сообщение..."
          onChange={onChangeMessage}
        ></textarea>
        <div>
          <button onClick={onSendMessage}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
