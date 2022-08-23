import styles from "./ProfileInfo.module.css";
import profileBackground from "./../../../../images/Content/Profile/ProfileBackground.jpg";
import defaultAvatar from "./../../../../images/Common/DefaultUserAvatar.png";

const ProfileInfo = (props) => {
  let profile = props.profile,
    profileAvatar;

  if (profile) {
    if (profile?.photos?.large) {
      profileAvatar = profile.photos.large;
    } else {
      profileAvatar = defaultAvatar;
    }
  }

  return (
    <div className={styles.profileInfo}>
      <img
        src={profileBackground}
        alt="Фон профиля"
        className={styles.profileBackground}
      />
      {
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={profileAvatar} className={styles.profileAvatar} />
      }
      <div className={styles.profileDescription}>
        <div className={styles.descriptionName}>{profile?.fullName}</div>
        <div className={styles.descriptionItem}>
          <span className={styles.descriptionItemHeader}>День рождения:</span>
          <span>16 марта</span>
        </div>
        <div className={styles.descriptionItem}>
          <span className={styles.descriptionItemHeader}>Город:</span>
          <span>Новосибирск</span>
        </div>
        <div className={styles.descriptionItem}>
          <span className={styles.descriptionItemHeader}>Образование:</span>
          <span>
            Новосибирский государственный университет поедания чокопаев (НГУПЧ)
          </span>
        </div>
        <div className={styles.descriptionItem}>
          <span className={styles.descriptionItemHeader}>Место работы:</span>
          <span>ООО «Пивоваренная компания «Балтика»</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
