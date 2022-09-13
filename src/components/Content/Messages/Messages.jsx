import styles from "./Messages.module.css";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { useSelector } from "react-redux";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { v4 as uuidv4 } from "uuid";
import AddMessageForm from "../../Forms/AddMessageForm/AddMessageForm";

const Messages = (props) => {
  const messagesPage = useSelector((state) => state.messagesPage);

  let dialogsElements = messagesPage.dialogs.map((dialogData) => {
    return <Dialog id={dialogData.id} key={uuidv4()} name={dialogData.name} />;
  });
  let messagesElements = messagesPage.messages.map((messageData) => {
    return (
      <Message
        id={messageData.id}
        key={uuidv4()}
        message={messageData.message}
      />
    );
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div className={styles.newMessage}>
        <AddMessageForm />
      </div>
    </div>
  );
};

export default withAuthRedirect(Messages);
