import styles from "./Dialog.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setRecipient } from "../../../../redux/messages.reducer";

const Dialog = (props) => {
  const dispatch = useDispatch();
  let dialogClass = styles.dialog;

  if (props.activeRecipientId === props.id) {
    dialogClass += " " + styles.activeDialog;
  }

  return (
    <div
      className={dialogClass}
      onClick={() => dispatch(setRecipient(props.id))}
    >
      <NavLink to={"/profile/" + props.id}>
        <img
          className={styles.userPhoto}
          src={props.photo}
          alt="Фото пользователя"
        />
      </NavLink>
      <span className={styles.userName}> {props.name}</span>
    </div>
  );
};

export default Dialog;
