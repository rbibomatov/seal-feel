import React from "react";
import dialogsClasses from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messagesPage = props.messagesPage;
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage(messagesPage.newMessageText);
  };
  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.updateMessageText(text);
  };

  let dialogsElements = messagesPage.dialogs.map((dialogData) => {
    return <Dialog id={dialogData.id} name={dialogData.name} />;
  });
  let messagesElements = messagesPage.messages.map((messageData) => {
    return <Message id={messageData.id} message={messageData.message} />;
  });

  return (
    <div className={dialogsClasses.dialogs}>
      <div className={dialogsClasses.dialogsItems}>{dialogsElements}</div>
      <div className={dialogsClasses.messages}>{messagesElements}</div>
      <div className={dialogsClasses.newMessage}>
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

export default Dialogs;
