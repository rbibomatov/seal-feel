import { useState, useEffect } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const showStatusElement = (
    <span
      className={props.isOnwer ? styles.showModeStatusBar : ""}
      onClick={() => {
        if (props.isOnwer) {
          setEditMode(true);
        }
      }}
    >
      {status ? status : props.isOnwer ? "Укажите ваш статус..." : ""}
    </span>
  );

  const editStatusElement = (
    <input
      className={styles.editModeStatusBar}
      maxLength="300"
      autoFocus={true}
      onBlur={() => {
        setEditMode(false);
        props.updateStatus(status);
      }}
      onChange={(e) => {
        setStatus(e.currentTarget.value);
      }}
      value={status}
    />
  );

  return (
    <div className={styles.statusBar}>
      {editMode ? editStatusElement : showStatusElement}
    </div>
  );
};

export default ProfileStatus;
