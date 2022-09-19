import styles from "./ProfilePhotoBar.module.css";
import { NavLink } from "react-router-dom";
import defaultPhoto from "./../../../../../images/Common/DefaultUserPhoto.png";
import clip from "./../../../../../images/Content/Clip.png";

const ProfilePhotoBar = (props) => {
  const userPhoto = props.userPhoto || defaultPhoto;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };

  const changePhotoBar = (
    <div className={styles.inputWindow}>
      <label className={styles.inputWindowLabel}>
        <div>
          <img className={styles.clipIcon} src={clip} alt="Скрепка" />
        </div>
        <div>
          <span className={styles.inputTitle}>Добавить файл</span>
        </div>
        <input
          className={styles.inputFile}
          type="file"
          onChange={onPhotoSelected}
        />
      </label>
    </div>
  );

  const messageButton = (
    <NavLink className={styles.addMessageButtonWrapper} to={"/messages/"}>
      <button
        className={styles.addMessageButton}
        onClick={() => {
          const user = {
            id: props.userId,
            name: props.userName,
            photo: userPhoto,
          };
          props.addDialog(user);
        }}
      >
        Написать
      </button>
    </NavLink>
  );

  return (
    <div className={styles.photoBar}>
      <img
        className={styles.profilePhoto}
        src={userPhoto}
        alt="Аватар пользователя"
      />
      {props.isOnwer ? changePhotoBar : messageButton}
    </div>
  );
};

export default ProfilePhotoBar;
