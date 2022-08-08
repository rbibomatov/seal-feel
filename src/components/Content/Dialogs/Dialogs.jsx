import dialogsClasses from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialogData) => {
    return <Dialog id={dialogData.id} name={dialogData.name} />;
  });
  let messagesElements = props.messages.map((messageData) => {
    return <Message id={messageData.id} message={messageData.message} />;
  });

  return (
    <div className={dialogsClasses.dialogs}>
      <div className={dialogsClasses.dialogsItems}>{dialogsElements}</div>
      <div className={dialogsClasses.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
