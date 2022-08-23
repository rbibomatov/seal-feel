import styles from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;
  const userName = props.name;

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{userName}</NavLink>
    </div>
  );
};

export default Dialog;
