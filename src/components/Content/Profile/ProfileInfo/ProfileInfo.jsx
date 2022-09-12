import styles from "./ProfileInfo.module.css";
import profileBackground from "./../../../../images/Content/Profile/ProfileBackground.jpg";
import defaultAvatar from "./../../../../images/Common/DefaultUserAvatar.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  let profile = props.profile,
    contacts = props.profile?.contacts;

  const showDescriptionContent = (itemHeader, profileData, createRef) => {
    if (profile) {
      let descriptionItems = [],
        emptyDataCount = 0,
        noDataElement = <div>Информация отсутствует</div>;

      for (let i = 0; i < profileData.length; i++) {
        let profileElement = profileData[i];

        if (profileElement) {
          if (typeof profileElement === "boolean") {
            profileElement = profileElement ? "Да" : "Нет";
          }

          descriptionItems.push(
            <div className={styles.descriptionItem}>
              <span className={styles.descriptionItemHeader}>
                {itemHeader[i] + ":"}
              </span>
              {createRef ? (
                <a
                  href={"https://" + profileElement}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profileElement}
                </a>
              ) : (
                <span>{profileElement}</span>
              )}
            </div>
          );
        } else {
          emptyDataCount++;
        }
      }

      return emptyDataCount === profileData.length
        ? noDataElement
        : descriptionItems;
    }
  };

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.saveUserAvatar(e.target.files[0]);
    }
  };

  if (profile) {
    return (
      <div className={styles.profileInfo}>
        <img
          className={styles.profileBackground}
          src={profileBackground}
          alt="Фон профиля"
        />

        <div className={styles.avatarBar}>
          <img
            className={styles.profileAvatar}
            src={profile.photos?.large || defaultAvatar}
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

        <div className={styles.profileDescription}>
          <div className={styles.profileName}>{profile?.fullName}</div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div className={styles.descriptionBlock}>
            <div className={styles.descriptionInfo}>
              <div className={styles.descriptionName}>Обо мне:</div>
              {showDescriptionContent(
                ["Статус", "Ищу работу", "Описание исковой работы"],
                [
                  profile?.aboutMe,
                  profile?.lookingForAJob,
                  profile?.lookingForAJobDescription,
                ]
              )}
            </div>
          </div>
          <div className={styles.descriptionBlock}>
            <div className={styles.descriptionInfo}>
              <div className={styles.descriptionName}>Контакты:</div>
              {showDescriptionContent(
                [
                  "Facebook",
                  "Website",
                  "VK",
                  "Twitter",
                  "Instagram",
                  "Youtube",
                  "Github",
                ],
                [
                  contacts?.facebook,
                  contacts?.website,
                  contacts?.vk,
                  contacts?.twitter,
                  contacts?.instagram,
                  contacts?.youtube,
                  contacts?.github,
                ],
                true
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default ProfileInfo;
