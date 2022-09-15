import styles from "./ProfilePhotoBar.module.css";
import defaultPhoto from "./../../../../../images/Common/DefaultUserPhoto.png";
import clip from "./../../../../../images/Content/Clip.png";

const ProfilePhotoBar = (props) => {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={styles.photoBar}>
      <img
        className={styles.profilePhoto}
        src={props.profilePhoto || defaultPhoto}
        alt="Аватар пользователя"
      />
      {props.isOnwer && (
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
      )}
    </div>
  );
};

export default ProfilePhotoBar;
