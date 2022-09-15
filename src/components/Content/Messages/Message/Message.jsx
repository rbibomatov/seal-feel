import styles from "./Message.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  return (
    <div className={styles.message}>
      <NavLink to={"/profile/" + props.senderId}>
        <img
          className={styles.senderPhoto}
          src={props.senderPhoto}
          alt="Фото пользователя"
        />
      </NavLink>

      <div className={styles.infoBar}>
        <span className={styles.senderName}> {props.senderName}</span>
        <span className={styles.sendTime}>
          {props.createTime.toTimeString().slice(0, 5)}
        </span>
        <div className={styles.messageText}>{props.message}</div>
      </div>
    </div>
  );
};

export default Message;
