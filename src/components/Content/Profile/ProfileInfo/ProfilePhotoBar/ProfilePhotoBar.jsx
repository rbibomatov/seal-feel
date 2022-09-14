import styles from "./ProfilePhotoBar.module.css";
import defaultAvatar from "./../../../../../images/Common/DefaultUserAvatar.png";

const ProfilePhotoBar = (props) => {
  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      // console.log(e.target.files[0]);
      props.updatePhoto(e.target.files[0]);
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
        <div className={styles.example}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <i className={styles.materialIcons}>attach_file</i>
              <span className={styles.title}>Добавить файл</span>
              <input type="file" onChange={onAvatarSelected} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoBar;
