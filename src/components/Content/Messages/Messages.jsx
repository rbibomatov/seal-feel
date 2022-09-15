import styles from "./Messages.module.css";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { useSelector } from "react-redux";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { v4 as uuidv4 } from "uuid";
import AddMessageForm from "../../Forms/AddMessageForm/AddMessageForm";

const Messages = (props) => {
  const dialogs = useSelector((state) => state.messagesPage.dialogs);
  const messages = useSelector((state) => state.messagesPage.messages);
  const activeRecipientId = useSelector(
    (state) => state.messagesPage.activeRecipientId
  );

  const noDialogsElement = (
    <div className={styles.noDialogsElement}>
      Диалоги на текущий момент отсутствуют
    </div>
  );

  const noMessagesElement = (
    <div className={styles.noMessagesElement}>
      Сообщения на текущий момент отсутствуют
    </div>
  );

  const dialogsElements = dialogs.map((dialog) => {
    return (
      <Dialog
        key={uuidv4()}
        {...dialog}
        activeRecipientId={activeRecipientId}
      />
    );
  });

  const messagesElements = messages.reduce((messages, message) => {
    if (activeRecipientId === message.recipientId) {
      messages.push(<Message key={uuidv4()} {...message} />);
    }

    return messages;
  }, []);

  const pageElement = (
    <div className={styles.dialogs}>
      <div>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElements.length ? messagesElements : noMessagesElement}
      </div>
      <div className={styles.newMessage}>
        <AddMessageForm />
      </div>
    </div>
  );

  return dialogs.length ? pageElement : noDialogsElement;
};

export default withAuthRedirect(Messages);
