import styles from "./ProfilePhotoBar.module.css";
import defaultAvatar from "./../../../../../images/Common/DefaultUserAvatar.png";

const ProfilePhotoBar = (props) => {
  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.saveUserAvatar(e.target.files[0]);
    }
  };

  return (
    <div className={styles.avatarBar}>
      <img
        className={styles.profileAvatar}
        src={props.profilePhoto || defaultAvatar}
        alt="Аватар пользователя"
      />
      {props.isOnwer && (
        <div>
          <input
            className={styles.changeAvatarButton}
            type="file"
            onChange={onAvatarSelected}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoBar;
