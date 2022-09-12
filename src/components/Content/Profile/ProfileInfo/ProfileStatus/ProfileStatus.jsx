import { useState, useEffect } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode && (
        <div>
          <input
            maxLength="300"
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactiveEditMode}
            value={status}
          />
        </div>
      )}
      {!editMode && (
        <div>
          <span onClick={activeEditMode}>{status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
